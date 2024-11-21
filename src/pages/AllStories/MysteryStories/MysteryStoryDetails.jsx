import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import cover from "../../../assets/cover/cover.jpg";

const MysteryStoryDetails = () => {
  const { storyId } = useParams(); // Get the storyId from the URL parameters
  const [story, setStory] = useState(null); // State to hold the current story
  const [allStories, setAllStories] = useState([]); // State to hold all stories data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const loadStoryData = async () => {
      try {
        const response = await fetch("http://localhost:5000/mystery"); // Fetch the entire merged stories file
        if (!response.ok) {
          throw new Error("Failed to fetch stories");
        }
        const data = await response.json();
        setAllStories(data); // Store all stories in state

        // Find the story by ID from the URL
        const currentStory = data.find(story => story.id === parseInt(storyId));
        if (currentStory) {
          setStory(currentStory.story[0]); // Set the first line of the story to state (start from the first line)
        } else {
          throw new Error(`Story with ID ${storyId} not found`);
        }
        setLoading(false); // Data has been loaded
      } catch (err) {
        setError(err.message); // Set error message
        setLoading(false); // Set loading to false
        console.error("Error loading story details:", err);
      }
    };

    loadStoryData();
  }, [storyId]); // The effect will run again if the storyId changes

  const handleOptionClick = (nextLineId) => {
    // Find the next part of the story based on the selected option
    const nextStory = allStories
      .find(story => story.id === parseInt(storyId)) // Find the correct story
      ?.story.find(part => part.id === nextLineId); // Find the next part by its nextLineId

    if (nextStory) {
      setStory(nextStory); // Update the story to the next part
    } else {
      console.error(`Story part with ID ${nextLineId} not found`);
    }
  };

  // Render loading state if the story is not yet set
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render error message if there was an error
  if (error) {
    return <div className="text-red-500">Error loading story: {error}</div>;
  }

  // Check if the current story has options, if not, it's the end of the story
  const isEndOfStory = !story.options || story.options.length === 0;

  return (
    <div className="story-detail">
      <Cover
        img={cover}
        title={"Create Mysterious Stories"}
        details={
          "Unravel thrilling plots where secrets, puzzles, and suspense keep you guessing until the end. Mystery stories challenge you to follow clues and solve enigmas alongside clever protagonists."
        }
      />
      <div className="justify-items-center p-4">
        {/* Display story title */}
        <h1 className="text-3xl font-bold text-white">{story.title}</h1>
        <p className="text-gray-300 my-4">{story.description}</p>

        {/* Display the options */}
        {!isEndOfStory ? (
          <div className="flex flex-wrap justify-center">
            {story.options && Array.isArray(story.options) ? (
              story.options.map((option) => (
                <button
                  key={option.id}
                  className="btn btn-primary my-2 mx-2"
                  onClick={() => handleOptionClick(option.nextLine)}
                >
                  {option.text}
                </button>
              ))
            ) : (
              <div className="text-white text-lg font-semibold my-4">
                The story has reached its conclusion. Thank you for playing!
              </div>
            )}
          </div>
        ) : (
          <div className="text-white text-lg font-semibold my-4">
            The story has reached its conclusion. Thank you for playing!
          </div>
        )}
      </div>
    </div>
  );
};

export default MysteryStoryDetails;