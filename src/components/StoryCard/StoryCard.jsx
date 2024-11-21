const StoryCard = ({ story, onEnterStory }) => {
  return (
    <div className="card bg-gray-700 shadow-xl hover:bg-gray-600 transition-all">
      <div className="card-body">
        <h2 className="card-title text-white">{story.title}</h2>
        <p className="text-gray-300">{story.description}</p>
        <button
          onClick={() => onEnterStory(story.id)}  // Calls the callback with story.id
          className="btn btn-primary bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-purple-500 hover:to-blue-500 transition-colors"
        >
          Enter Story
        </button>
      </div>
    </div>
  );
};

export default StoryCard;