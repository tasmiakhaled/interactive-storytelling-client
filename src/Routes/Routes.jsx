import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
// import Mystery from "../pages/CreateStory/Mystery";
import Adventure from "../pages/CreateStory/Adventure";
import Fantasy from "../pages/CreateStory/Fantasy";
import Horror from "../pages/CreateStory/Horror";
import Historical from "../pages/CreateStory/Historical";
import MyStory from "../pages/MyStory/MyStory";
import StoryDetails from "../pages/AllStories/SciFiStories/StoryDetails";
import MysteryStoryDetails from "../pages/AllStories/MysteryStories/MysteryStoryDetails";
import CreateStory from "../pages/CreateStory/CreateStory";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                 path: "/createStory",
                 element: <CreateStory></CreateStory>
            },
            {
                path: "createStory/sci-fi/:storyId",
                element: <StoryDetails></StoryDetails>
            },
            // {
            //     path: "createStory/mystery",
            //     element: <Mystery></Mystery>
            // },
            {
                path: "createStory/mystery/:storyId",
                element: <MysteryStoryDetails></MysteryStoryDetails>
            },
            {
                path: "createStory/adventure",
                element: <Adventure></Adventure>
            },
            {
                path: "createStory/fantasy",
                element: <Fantasy></Fantasy>
            },
            {
                path: "createStory/horror",
                element: <Horror></Horror>
            },
            {
                path: "createStory/historical",
                element: <Historical></Historical>
            },
            {
                path: "/myStory",
                element: <MyStory></MyStory>
            },
        ]
    },
]);
