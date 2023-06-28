import React from "react";
import Image from "next/image";

const SingleServiceCard = ({icon, name, count, desc}) => {
  return (
    <div className="bg-[var(--secondary-white)] border border-gray-200 border-opacity-60 shadow cursor-pointer transition-all duration-300 ease-in flex flex-col items-center p-8 rounded-md hover:scale-105">
      <div className="icon mb-2">
        <Image
          alt={""}
          src={icon}
          width={50}
          height={50}
        />
      </div>
      <div className="name text-center py-4 font-semibold text-[var(--secondary-black)] leading-normal tracking-wide">
        {name}
      </div>
      <div className="desc text-xs text-center">
        <div className="count text-gray-500 py-1">{count}+</div>
        <div className="text text-gray-700">{desc}</div>
      </div>
    </div>
  );
};

export default SingleServiceCard;
