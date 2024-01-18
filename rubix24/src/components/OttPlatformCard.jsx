import React from "react";

const OTTPlatformCard = ({ name, image, onClick, isClicked }) => (
  <div
    className="h-40 w-40 px-6 flex flex-col items-start justify-center gap-y-2 cursor-pointer"
    onClick={onClick}
  >
    <div className="w-28 h-28 flex items-center justify-center border-white border rounded-3xl">
      <img src={image} alt={`${name} Logo`} />
    </div>
    <p className="text-white text-center w-full">{name}</p>
  </div>
);

export default OTTPlatformCard;
