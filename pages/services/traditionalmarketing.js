import React from "react";
import SingleServiceCard from "@/components/Cards/SingleServiceCard";
import SingleServiceCardFlip from "@/components/Cards/SingleServiceCardFlip";

import { useSelector } from "react-redux";

import dynamic from "next/dynamic";
import Head from "next/head";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const PopUp = dynamic(() => import("@/components/PopUp/PopUp")); // lazy loading the component

const Marketing = () => {
  const showPopup = useSelector((state) => state.services.showPopup);

  const cardsData = [
    {
      image: "/Assets/icons/services/Yellow/Traditional/radio.png",
      name: "Radio",
      count: 499,
      desc: "Marketing Options",
    },
    {
      image: "/Assets/icons/services/Yellow/Traditional/cinema.png",
      name: "Cinema",
      count: 499,
      desc: "Marketing Options",
    },
    {
      image: "/Assets/icons/services/Yellow/Traditional/transit.png",
      name: "Transit",
      count: 499,
      desc: "Marketing Options",
    },
    {
      image: "/Assets/icons/services/Yellow/Traditional/outdoor.png",
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
    <>
      <Head>
        <title>Promotr - Traditional Marketing</title>
        <meta name="description" content="Discover the power of traditional marketing with our specialized services. From print media advertising to television and radio campaigns, we offer a wide array of traditional marketing solutions tailored to your business needs. Let our creative team help you leave a lasting impression on your target audience and drive tangible results."/>

      </Head>
      <section>
        <div className="h-[150px] sm:h-[350px] md:h-[450px]  w-full bg-center bg-no-repeat bg-cover opacity-100">
          <ReactPlayer
            url="/Assets/Videos/traditional.mp4"
            width="100%"
            height="100%"
            muted={true}
            playing={true}
            pip={true}
          />
        </div>
        <div className="service-cards flex justify-center my-12 lg:my-28">
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
    </>
  );
};

export default Marketing;
