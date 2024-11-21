import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import cover from "../../assets/cover/cover.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SciFiStories from "../AllStories/SciFiStories/SciFiStories";
import MysteryStories from "../AllStories/MysteryStories/MysteryStories";

const CreateStory = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  // Sync the tabIndex with the URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get("tab") || "sci-fi";

    // Update the tab index based on the current tab
    const tabMapping = {
      "sci-fi": 0,
      mystery: 1,
      adventure: 2,
      fantasy: 3,
      horror: 4,
      historical: 5,
    };

    setTabIndex(tabMapping[tab] ?? 0);
  }, [location.search]);

  const handleTabSelect = (index) => {
    setTabIndex(index);

    // Update the URL with the selected tab and reset page to 1
    const tabNames = ["sci-fi", "mystery", "adventure", "fantasy", "horror", "historical"];
    navigate(`?tab=${tabNames[index]}&page=1`, { replace: true });
  };

  return (
    <div>
      <Helmet>
        <title>BranchTales | Create Story</title>
      </Helmet>
      <Cover
        img={cover}
        title="Create Stories"
        details="Choose your preferred category and dive into the journey to create stories as you like."
      />
      <Tabs selectedIndex={tabIndex} onSelect={handleTabSelect}>
        <TabList className="flex flex-wrap justify-center items-center space-x-2 sm:space-x-6 pb-4 overflow-x-auto">
          <Tab
            className="py-2 px-4 text-white cursor-pointer transition-all duration-300 flex-shrink-0"
            selectedClassName="text-yellow-500 border-b-2 border-yellow-500"
          >
            Sci-Fi
          </Tab>
          <Tab
            className="py-2 px-4 text-white cursor-pointer transition-all duration-300 flex-shrink-0"
            selectedClassName="text-yellow-500 border-b-2 border-yellow-500"
          >
            Mystery
          </Tab>
          <Tab
            className="py-2 px-4  text-white cursor-pointer transition-all duration-300 flex-shrink-0"
            selectedClassName="text-yellow-500 border-b-2 border-yellow-500"
          >
            Adventure
          </Tab>
          <Tab
            className="py-2 px-4 text-white cursor-pointer transition-all duration-300 flex-shrink-0"
            selectedClassName="text-yellow-500 border-b-2 border-yellow-500"
          >
            Fantasy
          </Tab>
          <Tab
            className="py-2 px-4 text-white cursor-pointer transition-all duration-300 flex-shrink-0"
            selectedClassName="text-yellow-500 border-b-2 border-yellow-500"
          >
            Horror
          </Tab>
          <Tab
            className="py-2 px-4 text-white cursor-pointer transition-all duration-300 flex-shrink-0"
            selectedClassName="text-yellow-500 border-b-2 border-yellow-500"
          >
            Historical
          </Tab>
        </TabList>
        <TabPanel>
          <SciFiStories />
        </TabPanel>
        <TabPanel>
          <MysteryStories />
        </TabPanel>
        <TabPanel>
          <div>Adventure Stories Coming Soon...</div>
        </TabPanel>
        <TabPanel>
          <div>Fantasy Stories Coming Soon...</div>
        </TabPanel>
        <TabPanel>
          <div>Horror Stories Coming Soon...</div>
        </TabPanel>
        <TabPanel>
          <div>Historical Stories Coming Soon...</div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CreateStory;