import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Pagination from "../../../components/Pagination/Pagination";
import StoryCard from "../../../components/StoryCard/StoryCard";

const MysteryStories = () => {
  const [mysteryStories, setMysteryStories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [storiesPerPage] = useState(6);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const pageFromUrl = parseInt(params.get("page"), 10) || 1;
    const currentTab = params.get("tab");

    // Update currentPage only if the tab is "mystery"
    if (currentTab === "mystery") {
      setCurrentPage(pageFromUrl);
    }

    const loadStories = async () => {
      try {
        const response = await fetch("http://localhost:5000/mystery"); // Adjust path if needed
        if (!response.ok) {
          throw new Error("Failed to fetch story list");
        }
        const data = await response.json();
        setMysteryStories(data);
      } catch (err) {
        console.error("Error loading stories:", err);
      }
    };

    loadStories();
  }, [location.search]); // Re-run when URL changes

  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const currentStories = mysteryStories.slice(indexOfFirstStory, indexOfLastStory);

  const totalPages = Math.ceil(mysteryStories.length / storiesPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      navigate(`?tab=mystery&page=${pageNumber}`, { replace: true });
    }
  };

  const enterStory = (storyId) => {
    navigate(`/createStory/mystery/${storyId}`);
  };

  return (
    <div>
      <div className="my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentStories.map((story) => (
          <StoryCard
            key={story.id}
            story={story}
            onEnterStory={enterStory}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MysteryStories;