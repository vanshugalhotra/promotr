import React from "react";
import SingleServiceCard from "@/components/Cards/SingleServiceCard";

import { useSelector } from "react-redux";
import PopUp from "@/components/PopUp/PopUp";

import dynamic from "next/dynamic";
import SingleServiceCardFlip from "@/components/Cards/SingleServiceCardFlip";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
// import ReactPlayer from "react-player/lazy";

const Marketing = () => {
  const showPopup = useSelector((state) => state.services.showPopup);

  const cardsData = [
    {
      image: "/Assets/icons/services/Yellow/Traditional/radio.png",
      name: "Brand Stationary",
      count: 499,
      desc: "Marketing Options",
      backImage: "/Assets/test.jpg"
    },
    {
      image: "/Assets/icons/services/Yellow/Traditional/cinema.png",
      name: "Brand Merchandise",
      count: 499,
      desc: "Marketing Options",
    },
    {
      image: "/Assets/icons/services/Yellow/Traditional/transit.png",
      name: "Product Catalogue",
      count: 499,
      desc: "Marketing Options",
    },
    {
      image: "/Assets/icons/services/Yellow/Traditional/radio.png",
      name: "Outdoor",
      count: 499,
      desc: "Marketing Options",
    },
    {
      image: "/Assets/icons/services/Yellow/Traditional/magazine.png",
      name: "Magazine",
      count: 499,
      desc: "Marketing Options",
    },
    {
      image: "/Assets/icons/services/Yellow/Traditional/newspaper.png",
      name: "newspaper",
      count: 499,
      desc: "Marketing Options",
    },
    {
      image: "/Assets/icons/services/Yellow/Traditional/sports.png",
      name: "Sports Marketing",
      count: 499,
      desc: "Marketing Options",
    },
    {
      image: "/Assets/icons/services/Yellow/Traditional/mall.png",
      name: "Mall",
      count: 499,
      desc: "Marketing Options",
    },
    {
      image: "/Assets/icons/services/Yellow/Traditional/btl.png",
      name: "BTL",
      count: 499,
      desc: "Marketing Options",
    },
    {
      image: "/Assets/icons/services/Yellow/Traditional/event_management.png",
      name: "Event Management",
      count: 499,
      desc: "Marketing Options",
    },
  ];

  return (
    <section>
      <div className="h-[450px] bg-[var(--secondary-black)] w-full bg-center bg-no-repeat bg-cover opacity-100">
        <ReactPlayer
          url="/Assets/Videos/graphic.mp4"
          width="100%"
          height="100%"
          muted={true}
          playing={true}
          pip={true}
        />
      </div>
      <div className="service-cards flex justify-center  my-28">
        <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {cardsData.map((eachCard, index) => {
            if (eachCard.backImage) {
              return (
                <div key={index}>
                  <SingleServiceCardFlip {...eachCard} />
                </div>
              );
            }
            return (
              <div key={index}>
                <SingleServiceCard {...eachCard} />
              </div>
            );
          })}
        </div>
        {showPopup && <PopUp />}
      </div>
    </section>
  );
};

export default Marketing;
