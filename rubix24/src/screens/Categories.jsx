import React, { useState } from "react";
import GenreTag from "../components/GenreTag";
import PlatformTag from "../components/PlatformTag";

const Categories = () => {
  const genres = [
    "Romance",
    "Action",
    "Sci-Fi",
    "Fantasy",
    "Psychological Thriller",
    "Anime",
    "Adult",
  ];

  const platforms = [
    { name: "NETFLIX", img: require("../assets/Netflix.png") },
    { name: "PRIME", img: require("../assets/Netflix.png") },
    { name: "HOTSTAR", img: require("../assets/Netflix.png") },
    { name: "ZEE5", img: require("../assets/Netflix.png") },
    { name: "ZEE6", img: require("../assets/Netflix.png") },
    { name: "ZEE7", img: require("../assets/Netflix.png") },
    { name: "ZEE8", img: require("../assets/Netflix.png") },
    { name: "ZEE9", img: require("../assets/Netflix.png") },
    { name: "ZEE10", img: require("../assets/Netflix.png") },

    // Add other platforms similarly
  ];

  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

  const handlePlatformClick = (platformName) => {
    if (selectedPlatforms.includes(platformName)) {
      // If platform is already selected, remove it
      setSelectedPlatforms((prevSelected) =>
        prevSelected.filter((platform) => platform !== platformName)
      );
    } else {
      // If platform is not selected, add it
      setSelectedPlatforms((prevSelected) => [...prevSelected, platformName]);
    }
  };

  return (
    <div className="bg-[#141414] text-white h-[100vh] w-[100vw] flex flex-col ">
      <div className="flex flex-col items-center justify-center font-roboto pt-20 px-16 gap-y-4 pb-44">
        <p className="text-xl font-semibold">What are you interested in ?</p>
        <p className="text-center text-sm text-[#9c9c9c] w-[100%] font-light">
          Select some topics to follow to personalize your experince.
        </p>
      </div>
      <div className="font-roboto mx-6">
        <p className="text-xl font-semibold py-4">Popular Categories</p>
        <div className="flex flex-wrap gap-2.5 overflow-x-auto">
          {genres.map((genre, index) => (
            <GenreTag key={index} name={genre} />
          ))}
        </div>
      </div>
      <div className="font-roboto mx-6">
        <p className="text-xl font-semibold py-6">Popular Platforms</p>
        <div className="w-full h-28   flex gap-x-2.5 overflow-x-auto">
          {platforms.map((platform, index) => (
            <PlatformTag
              key={index}
              platformImg={platform.img}
              platformName={platform.name}
              selected={selectedPlatforms.includes(platform.name)}
              onClick={() => handlePlatformClick(platform.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
