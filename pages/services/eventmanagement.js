import React from "react";
import SingleServiceCard from "@/components/Cards/SingleServiceCard";
import SingleServiceCardFlip from "@/components/Cards/SingleServiceCardFlip";

import { useSelector } from "react-redux";
import PopUp from "@/components/PopUp/PopUp";

import dynamic from "next/dynamic";
import SingleServiceCardBig from "@/components/Cards/SingleServiceCardBig";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
// import ReactPlayer from "react-player/lazy";

const Marketing = () => {
  const showPopup = useSelector((state) => state.services.showPopup);

  const cardsData = [
    {
      image: "/Assets/vectors/corporate.jpg",
      name: "corporate events",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    },
    {
      image: "/Assets/vectors/wedding.jpg",
      name: "Wedding Planner",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    },
    {
      image: "/Assets/vectors/corporate.jpg",
      name: "corporate events",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    },
    {
      image: "/Assets/vectors/wedding.jpg",
      name: "Wedding Planner",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    },
  ];

  return (
    <section>
      <div className="h-[450px] bg-[var(--main-black)] w-full bg-center bg-no-repeat bg-cover opacity-100">
        <ReactPlayer
          url="/Assets/Videos/events.mp4"
          width="100%"
          height="100%"
          muted={true}
          playing={true}
          pip={true}
        />
      </div>
      <div className="service-cards flex justify-center my-12 xl:my-28">
        <div className="cards grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {cardsData.map((eachCard, index) => {
            return <SingleServiceCardBig key={index} {...eachCard} />;
          })}
        </div>
        {showPopup && <PopUp />}
      </div>
    </section>
  );
};

export default Marketing;
