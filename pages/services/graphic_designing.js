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
      image: "/Assets/icons/services/Yellow/Graphic/businesscard.png",
      name: "Business Card",
      count: 499,
      desc: "Marketing Options",
      backImage: "/Assets/test.jpg",
    },
    {
      image: "/Assets/icons/services/Yellow/Graphic/brand_stationary.png",
      name: "Brand Stationary",
      count: 499,
      desc: "Marketing Options",
      backImage: "/Assets/test.jpg",
    },
    {
      image: "/Assets/icons/services/Yellow/Graphic/brand_merchandise.png",
      name: "Brand Merchandise",
      count: 499,
      desc: "Marketing Options",
      backImage: "/Assets/test.jpg",
    },
    {
      image: "/Assets/icons/services/Yellow/Graphic/brandkit.png",
      name: "Brand Kit",
      count: 499,
      desc: "Marketing Options",
      backImage: "/Assets/test.jpg",
    },
    {
      image: "/Assets/icons/services/Yellow/Graphic/logo.png",
      name: "Logo Design",
      count: 499,
      desc: "Marketing Options",
      backImage: "/Assets/test.jpg",
    },
    {
      image: "/Assets/icons/services/Yellow/Graphic/product_catalogue.png",
      name: "Product Catalogue",
      count: 499,
      desc: "Marketing Options",
      backImage: "/Assets/test.jpg",
    },
    {
      image: "/Assets/icons/services/Yellow/Graphic/labelling.png",
      name: "Labelling & Packaging",
      count: 499,
      desc: "Marketing Options",
      backImage: "/Assets/test.jpg",
    },
    {
      image: "/Assets/icons/services/Yellow/Graphic/social_media_graphics.png",
      name: "Social Media Graphics",
      count: 499,
      desc: "Marketing Options",
      backImage: "/Assets/test.jpg",
    },
    {
      image: "/Assets/icons/services/Yellow/Graphic/social_media_ads.png",
      name: "Social Media Ads",
      count: 499,
      desc: "Marketing Options",
      backImage: "/Assets/test.jpg",
    },
    {
      image: "/Assets/icons/services/Yellow/Graphic/posters.png",
      name: "Poster, Flyers, Editorials",
      count: 499,
      desc: "Marketing Options",
      backImage: "/Assets/test.jpg",
    },
    {
      image: "/Assets/icons/services/Yellow/Graphic/art.png",
      name: "Art & Illustrations",
      count: 499,
      desc: "Marketing Options",
      backImage: "/Assets/test.jpg",
    },
    {
      image: "/Assets/icons/services/Yellow/Graphic/videos.png",
      name: "Videos",
      count: 499,
      desc: "Marketing Options",
      backImage: "/Assets/test.jpg",
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
