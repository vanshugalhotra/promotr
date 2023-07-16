import React from "react";
import Image from "next/image";

// redux
import { useDispatch } from "react-redux";
import { openPopup } from "@/slices/servicesSlice";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
// import ReactPlayer from "react-player/lazy";

const SingleServiceCardFlip = ({
  image,
  name,
  count,
  desc,
  backImage,
  backVideo,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openPopup());
  };

  return (
    <div className="single-service-card-container inline-block">
      <div
        className="bg-[var(--secondary-white)] border border-gray-200 border-opacity-60 shadow-sm cursor-pointer single-service-card relative"
        onClick={handleClick}
      >
        <div className="front flex flex-col items-center p-5 justify-center absolute top-0 left-0">
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
        <div className="back">
          {backImage && (
            <Image
              alt=""
              src={backImage}
              className="rounded"
              style={{ objectFit: "cover" }}
              layout="fill"
            />
          )}
          {backVideo && (
            <ReactPlayer
              url={backVideo}
              width="100%"
              height="100%"
              muted={true}
              playing={true}
              loop={true}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleServiceCardFlip;
