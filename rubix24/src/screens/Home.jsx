import React from "react";
import Navbar from "../components/Navbar";
import OTTPlatformCard from "../components/OttPlatformCard";
import UpcomingCard from "../components/UpcomingCard";

const Home = () => {
  const ottPlatforms = [
    { name: "Netflix", image: require("../assets/Netflix.png") },
    { name: "Amazon Prime", image: require("../assets/Netflix.png") },
    { name: "Disney+", image: require("../assets/Netflix.png") },
    { name: "Netflix", image: require("../assets/Netflix.png") },
    { name: "Amazon Prime", image: require("../assets/Netflix.png") },
    { name: "Disney+", image: require("../assets/Netflix.png") },
    { name: "Netflix", image: require("../assets/Netflix.png") },
    { name: "Amazon Prime", image: require("../assets/Netflix.png") },
    { name: "Disney+", image: require("../assets/Netflix.png") },
    { name: "Netflix", image: require("../assets/Netflix.png") },
    { name: "Amazon Prime", image: require("../assets/Netflix.png") },
    { name: "Disney+", image: require("../assets/Netflix.png") },
  ];

  const upcomingData = [
    {
      imageUrl: require("../assets/moviepic.png"),
      duration: "2h 30min",
      seasons: "3 Seasons",
    },
    {
      imageUrl: require("../assets/moviepic.png"),
      duration: "2h 30min",
      seasons: "3 Seasons",
    },
    {
      imageUrl: require("../assets/moviepic.png"),
      duration: "2h 30min",
      seasons: "3 Seasons",
    },
    {
      imageUrl: require("../assets/moviepic.png"),
      duration: "2h 30min",
      seasons: "3 Seasons",
    },
    {
      imageUrl: require("../assets/moviepic.png"),
      duration: "2h 30min",
      seasons: "3 Seasons",
    },
    {
      imageUrl: require("../assets/moviepic.png"),
      duration: "2h 30min",
      seasons: "3 Seasons",
    },
    {
      imageUrl: require("../assets/moviepic.png"),
      duration: "2h 30min",
      seasons: "3 Seasons",
    },

    // Add more data as needed
  ];

  return (
    <div className="main_Home h-full w-[100vw] flex-col  justify-center  items-start py-4 space-y-6 ">
      <div className="w-[100%] justify-center flex items-center ">
        <Navbar />
      </div>
      {/* Start next div here in the main div main_Home */}
      <div className="rounded-lg h-[30%] shadow-[0px 4px 4px rgba(0,0,0,0.25)] w-full active-sub rounded-3xl">
        <p className="px-16 py-8 text-2xl font-manrope text-white h-56">
          Active Subscription
        </p>
        {/* put active subscriptions here */}
      </div>
      <p className="text-white font-manrope text-3xl mx-12">
        Upcoming and Trending
      </p>
      <div className="w-[100vw] flex flex-col gap-y-4 overflow-x-auto px-6 ">
        <div className="flex w-[100vw]">
          {ottPlatforms.map((platform, index) => (
            <OTTPlatformCard
              key={index}
              name={platform.name}
              image={platform.image}
            />
          ))}
        </div>
      </div>
      <p className="text-white font-manrope text-3xl mx-12">Upcoming</p>
      <div className=" overflow-y-auto  gap-x-4 h-auto w-[100vw] flex flex-row gap-y-4 overflow-x-auto px-6">
        {upcomingData.map((data, index) => (
          <UpcomingCard
            key={index}
            imageUrl={data.imageUrl}
            duration={data.duration}
            seasons={data.seasons}
          />
        ))}
      </div>
      <p className="text-white font-manrope text-3xl mx-12 py-4">Trendings</p>
      <div className=" overflow-y-auto  gap-x-4 max-h-80 w-[100vw] flex flex-row gap-y-4 overflow-x-auto px-6">
        {upcomingData.map((data, index) => (
          <UpcomingCard
            key={index}
            imageUrl={data.imageUrl}
            duration={data.duration}
            seasons={data.seasons}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
