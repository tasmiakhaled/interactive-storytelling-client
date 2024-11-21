import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Pagination from "../../../components/Pagination/Pagination";
import StoryCard from "../../../components/StoryCard/StoryCard";

const SciFiStories = () => {
  const [sciFiStories, setSciFiStories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [storiesPerPage] = useState(6);
  const navigate = useNavigate();
  const location = useLocation(); // Hook to access the current URL

  useEffect(() => {
    // Get the current page from the URL query parameters
    const urlParams = new URLSearchParams(location.search);
    const page = parseInt(urlParams.get("page"), 10);

    // If a valid page number is found in the URL, set the current page
    if (page && page >= 1) {
      setCurrentPage(page);
    } else {
      setCurrentPage(1); // Default to page 1 if no valid page number is found
    }

    const loadStories = async () => {
      try {
        const response = await fetch("http://localhost:5000/scifi"); // Adjust path if needed
        if (!response.ok) {
          throw new Error("Failed to fetch story list");
        }
        const data = await response.json();
        setSciFiStories(data); // Assuming data is an array of story objects
      } catch (err) {
        console.error("Error loading stories:", err);
      }
    };

    loadStories();
  }, [location.search]); // This effect runs when location.search changes

  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const currentStories = sciFiStories.slice(indexOfFirstStory, indexOfLastStory);

  const totalPages = Math.ceil(sciFiStories.length / storiesPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      navigate(`?page=${pageNumber}`, { replace: true }); // Update URL without refreshing the page
    }
  };

  return (
    <div>
      <div className="my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentStories.map((story) => (
          <StoryCard
            key={story.id}
            story={story}
            onEnterStory={(storyId) => navigate(`/createStory/sci-fi/${storyId}`)}
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

export default SciFiStories;