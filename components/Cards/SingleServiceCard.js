import React from "react";
import Image from "next/image";

// redux
import { useDispatch } from "react-redux";
import { openPopup } from "@/slices/servicesSlice";

const SingleServiceCard = ({ image, name, count, desc }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openPopup());
  };

  return (
    <div
        className="bg-[var(--secondary-white)] border border-gray-200 border-opacity-60 shadow cursor-pointer transition-all duration-300 ease-in flex flex-col items-center justify-center p-5 rounded-md hover:scale-105  sm:w-[230px] sm:h-[230px] w-[230px] h-[210px]"
      onClick={handleClick}
    >
      <div className="icon mb-2">
        <Image alt={""} src={image} width={50} height={50} />
      </div>
      <div className="name text-center py-4 font-semibold text-[var(--secondary-black)] leading-normal tracking-wide capitalize">
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
