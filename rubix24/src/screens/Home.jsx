import React, { useEffect , useState } from "react";
import Navbar from "../components/Navbar";
import OTTPlatformCard from "../components/OttPlatformCard";
import UpcomingCard from "../components/UpcomingCard";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firebase"
import { useNavigate } from "react-router";
import {
  RemoveScrollBar,
  noScrollbarsClassName,
} from "react-remove-scroll-bar";

const Home = () => {
  const ottPlatforms = [
    { name: "Netflix", image: require("../assets/Netflix.png") },
    { name: "Amazon Prime", image: require("../assets/primesmall.png") },
    { name: "Disney+", image: require("../assets/disneybig.webp") },
    { name: "Spotify", image: require("../assets/spotify.png") },
    { name: "Netflix", image: require("../assets/Netflix.png") },
    { name: "Amazon Prime", image: require("../assets/primesmall.png") },
    { name: "Disney+", image: require("../assets/disneybig.webp") },
    { name: "Spotify", image: require("../assets/spotify.png") },
    { name: "Netflix", image: require("../assets/Netflix.png") }
   
  ];

  const upcomingData = [
    {
      platform: "Netflix",
      imageUrl: require("../assets/moviepic.png"),
      duration: "2h 30min",
      seasons: "3 Seasons",
    },
    {
      platform: "Netflix",
      imageUrl: require("../assets/moviepic.png"),
      duration: "2h",
      seasons: "1 Season",
    },
    {
      platform: "Amazon Prime",
      imageUrl: require("../assets/moviepic-2.png"),
      duration: "1h 45min",
      seasons: "2 Seasons",
    },
    {
      platform: "Disney+",
      imageUrl: require("../assets/moviepic-2.png"),
      duration: "1h 45min",
      seasons: "2 Seasons",
    },
    {
      platform: "Disney+",
      imageUrl: require("../assets/moviepic-2.png"),
      duration: "3h 45min",
      seasons: "2 Seasons",
    },
    {
      platform: "Zee5",
      imageUrl: require("../assets/moviepic-3.png"),
      duration: "1h 45min",
      seasons: "3 Seasons",
    },
    {
      platform: "Zee5",
      imageUrl: require("../assets/moviepic-3.png"),
      duration: "4h 45min",
      seasons: "4 Seasons",
    },
  ];
  const trendingData = [
    {
      platform: "Amazon Prime",
      imageUrl: require("../assets/moviepic.png"),
      duration: "2h 30min",
      seasons: "3 Seasons",
    },
    {
      platform: "Amazon Prime",
      imageUrl: require("../assets/moviepic.png"),
      duration: "2h",
      seasons: "1 Season",
    },
    {
      platform: "Netflix",
      imageUrl: require("../assets/moviepic-2.png"),
      duration: "1h 45min",
      seasons: "2 Seasons",
    },
    {
      platform: "Zee5",
      imageUrl: require("../assets/moviepic-2.png"),
      duration: "1h 45min",
      seasons: "2 Seasons",
    },
    {
      platform: "Zee5",
      imageUrl: require("../assets/moviepic-2.png"),
      duration: "3h 45min",
      seasons: "2 Seasons",
    },
    {
      platform: "Disney+",
      imageUrl: require("../assets/moviepic-3.png"),
      duration: "1h 45min",
      seasons: "3 Seasons",
    },
    {
      platform: "Disney+",
      imageUrl: require("../assets/moviepic-3.png"),
      duration: "4h 45min",
      seasons: "4 Seasons",
    },
  ];

  const [selectedPlatform, setSelectedPlatform] = useState("Netflix");

  const handlePlatformClick = (platformName) => {
    setSelectedPlatform(platformName);
  };

  //filtering data
  const filteredUpcomingData = upcomingData.filter(
    (data) => data.platform === selectedPlatform
  );

  const filteredTrendingData = trendingData.filter(
    (data) => data.platform === selectedPlatform
  );

  const navigate = useNavigate();
  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log("alredy in")
        // ...
      } else {
        navigate('/login')
      }
    });

  }, [onAuthStateChanged])

  return (
    <div className="main_Home h-full w-[100vw] flex-col  justify-center  items-start py-4 space-y-6 ">
      <div className="w-[100%] justify-center flex items-end ">
        <Navbar />
      </div>
      {/* Start next div here in the main div main_Home */}
      <div className="flex w-full items-center justify-center ">
        <div className="rounded-3xl h-[30%] shadow-[0px 4px 4px rgba(0,0,0,0.25)] w-[100%]  active-sub ">
          <p className="px-16 py-8 text-2xl font-manrope text-white ">
            Active Subscription
          </p>
          <div className="l flex gap-3 w-[100vw] gap-y-4 overflow-x-auto px-6">
            {/* Render 3 OTT platforms within the 'l' class */}
            {ottPlatforms.slice(0, 3).map((platform, index) => (
              <OTTPlatformCard
                key={index}
                name={platform.name}
                image={platform.image}
                onClick={() => handlePlatformClick(platform.name)}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-white font-manrope text-3xl mx-12">
        Upcoming and Trending
      </p>
      <div className="w-[100vw] flex flex-col gap-y-4 overflow-x-auto px-6 ">
      
        <div className="flex  w-[100vw]">
          {ottPlatforms.map((platform, index) => (
            <OTTPlatformCard
              key={index}
              name={platform.name}
              image={platform.image}
              onClick={() => handlePlatformClick(platform.name)}
            />
          ))}
        </div>
      </div>
      <div>
        <p className="text-white font-manrope text-3xl mx-12">Upcoming</p>
        <div></div>
      </div>
      <div className=" overflow-y-auto  gap-x-4 h-auto w-[100vw] flex flex-row gap-y-4 overflow-x-auto px-6">
        {filteredUpcomingData.map((data, index) => (
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
        {filteredTrendingData.map((data, index) => (
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
