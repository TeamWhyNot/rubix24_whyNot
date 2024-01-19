import React from "react";

const UpcomingCard = ({ imageUrl, duration, seasons }) => {
  return (
    <div className="lg:w-[15%] bg-[#1a1a1a]  rounded-lg">
      <img src={imageUrl} className="p-4"></img>
      <div className="flex justify-between px-4  text-[#999] font-medium h-10">
        <p className="">{duration}</p>
        <p className="">{seasons}</p>
      </div>
    </div>
  );
};

export default UpcomingCard;
