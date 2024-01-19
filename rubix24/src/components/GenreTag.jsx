import React, { useState } from "react";

const GenreTag = ({ name }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`h-9 min-w-20 flex items-center justify-center border rounded-md border-darkslategray overflow-hidden transition duration-300 ${
        isClicked ? "bg-gold text-black" : ""
      }`}
      onClick={handleClick}
    >
      <p className="font-medium p-2.5">{name}</p>
    </div>
  );
};

export default GenreTag;
