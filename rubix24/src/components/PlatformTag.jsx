// PlatformTag.js

import { whileStatement } from "@babel/types";
import React from "react";

const PlatformTag = ({ platformImg, platformName, selected, onClick }) => {
  return (
    <div
      className="h-full flex min-w-24 flex-col gap-y-2.5 items-center justify-center"
      onClick={onClick}
    >
      <div
        className={`flex items-center justify-center  p-2 rounded-full border min-h-10 ${
          selected ? "border-gold" : "border-white text-gold"
        }`}
      >
        <img
          src={platformImg}
          alt={`${platformName} Logo`}
          style={{
            borderRadius: "50%",
            height: "100%", // Ensure the image takes up the full height
            width: "auto",
          }}
        />
      </div>
      <p className="text-sm h-5 w-10 overflow-hidden">{platformName}</p>
    </div>
  );
};

export default PlatformTag;
