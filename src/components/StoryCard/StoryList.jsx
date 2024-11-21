import { useNavigate } from "react-router-dom";
import StoryCard from "./StoryCard";

const StoryList = ({ stories }) => {
  const navigate = useNavigate();  // Get the navigate function to handle page navigation

  // Define the function to handle when a story is clicked
  const handleEnterStory = (storyId) => {
    // Navigate to the story details page using the provided storyId
    navigate(`/createStory/sci-fi/${storyId}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {stories.map((story) => (
        <StoryCard
          key={story.id}
          story={story}
          onEnterStory={handleEnterStory}  // Pass the callback to StoryCard
        />
      ))}
    </div>
  );
};

export default StoryList;
