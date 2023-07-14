import React from "react";
import SingleServiceCard from "@/components/Cards/SingleServiceCard";
import SingleServiceCardFlip from "@/components/Cards/SingleServiceCardFlip";

import { useSelector } from "react-redux";
import PopUp from "@/components/PopUp/PopUp";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
// import ReactPlayer from "react-player/lazy";

const Marketing = () => {
  const showPopup = useSelector((state) => state.services.showPopup);

  const cardsData = [
    {
      image: "/Assets/icons/services/Yellow/Digital/brand_awareness.png",
      name: "Brand Awareness",
      count: 499,
      desc: "Marketing Options",
    },
    {
      image: "/Assets/icons/services/Yellow/Digital/push_ads.png",
      name: "Pop Up & Push Ads",
      count: 499,
      desc: "Marketing Options",
    },
    {
      image: "/Assets/icons/services/Yellow/Digital/influencer.png",
      name: "Influencer Marketing",
      count: 499,
      desc: "Marketing Options",
    },
    {
      image: "/Assets/icons/services/Yellow/Digital/long_term.png",
      name: "Long Term Brand Marketing",
      count: 499,
      desc: "Marketing Options",
    },
    {
      image: "/Assets/icons/services/Yellow/Digital/twitter.png",
      name: "Twitter",
      count: 499,
      desc: "Marketing Options",
    },
    {
      image: "/Assets/icons/services/Yellow/Digital/linkedin.png",
      name: "LinkedIn",
      count: 499,
      desc: "Marketing Options",
    },
    {
      image: "/Assets/icons/services/Yellow/Digital/youtube.png",
      name: "Youtube",
      count: 499,
      desc: "Marketing Options",
    },
    {
      image: "/Assets/icons/services/Yellow/Digital/instagram.png",
      name: "Instagram",
      count: 499,
      desc: "Marketing Options",
    },
    {
      image: "/Assets/icons/services/Yellow/Digital/facebook.png",
      name: "Facebook",
      count: 499,
      desc: "Marketing Options",
    },
    {
      image: "/Assets/icons/services/Yellow/Digital/blogger.png",
      name: "Blogger",
      count: 499,
      desc: "Marketing Options",
    },
    {
      image: "/Assets/icons/services/Yellow/Digital/seo.png",
      name: "SEO (Search Engine Optimization)",
      count: 499,
      desc: "Marketing Options",
    },
    {
      image: "/Assets/icons/services/Yellow/Digital/smm.png",
      name: "SMM (Social Media Marketing)",
      count: 499,
      desc: "Marketing Options",
    },
  ];

  return (
    <section>
      <div className="h-[450px] bg-[var(--secondary-yellow)] w-full bg-center bg-no-repeat bg-cover opacity-100">
        <ReactPlayer
          url="/Assets/Videos/digital.mp4"
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
