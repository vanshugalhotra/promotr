import React from "react";
import SingleServiceCard from "@/components/Cards/SingleServiceCard";

import { useSelector } from "react-redux";

import dynamic from "next/dynamic";
import Head from "next/head";
import SingleServiceCardFlip from "@/components/Cards/SingleServiceCardFlip";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const PopUp = dynamic(() => import("@/components/PopUp/PopUp")); // lazy loading the component

const Marketing = () => {
  const showPopup = useSelector((state) => state.services.showPopup);

  const cardsData = [
    {
      image: "/Assets/icons/services/Yellow/Graphic/businesscard.png",
      name: "Business Card",
      count: 499,
      desc: "Marketing Options",
      backImage:
        "/Assets/icons/services/Yellow/Graphic/CardFlip/businesscard.jpeg",
    },
    {
      image: "/Assets/icons/services/Yellow/Graphic/brand_stationary.png",
      name: "Brand Stationary",
      count: 499,
      desc: "Marketing Options",
      backImage:
        "/Assets/icons/services/Yellow/Graphic/CardFlip/brand_stationary.jpg",
    },
    {
      image: "/Assets/icons/services/Yellow/Graphic/brand_merchandise.png",
      name: "Brand Merchandise",
      count: 499,
      desc: "Marketing Options",
      backImage:
        "/Assets/icons/services/Yellow/Graphic/CardFlip/brand_merchandise.jpg",
    },
    {
      image: "/Assets/icons/services/Yellow/Graphic/brandkit.png",
      name: "Brand Kit",
      count: 499,
      desc: "Marketing Options",
      backImage: "/Assets/icons/services/Yellow/Graphic/CardFlip/brandkit.jpg",
    },
    {
      image: "/Assets/icons/services/Yellow/Graphic/logo.png",
      name: "Logo Design",
      count: 499,
      desc: "Marketing Options",
      backImage: "/Assets/icons/services/Yellow/Graphic/CardFlip/logo.png",
    },
    {
      image: "/Assets/icons/services/Yellow/Graphic/product_catalogue.png",
      name: "Product Catalogue",
      count: 499,
      desc: "Marketing Options",
      backImage:
        "/Assets/icons/services/Yellow/Graphic/CardFlip/product_catalogue.jpg",
    },
    {
      image: "/Assets/icons/services/Yellow/Graphic/labelling.png",
      name: "Labelling & Packaging",
      count: 499,
      desc: "Marketing Options",
      backImage: "/Assets/icons/services/Yellow/Graphic/CardFlip/labelling.jpg",
    },
    {
      image: "/Assets/icons/services/Yellow/Graphic/social_media_graphics.png",
      name: "Social Media Graphics",
      count: 499,
      desc: "Marketing Options",
      backImage:
        "/Assets/icons/services/Yellow/Graphic/CardFlip/social_media_graphics.jpg",
    },
    {
      image: "/Assets/icons/services/Yellow/Graphic/social_media_ads.png",
      name: "Social Media Ads",
      count: 499,
      desc: "Marketing Options",
      backImage:
        "/Assets/icons/services/Yellow/Graphic/CardFlip/social_media_ads.jpg",
    },
    {
      image: "/Assets/icons/services/Yellow/Graphic/posters.png",
      name: "Poster, Flyers, Editorials",
      count: 499,
      desc: "Marketing Options",
      backImage: "/Assets/icons/services/Yellow/Graphic/CardFlip/posters.jpeg",
    },
    {
      image: "/Assets/icons/services/Yellow/Graphic/art.png",
      name: "Art & Illustrations",
      count: 499,
      desc: "Marketing Options",
      backImage: "/Assets/icons/services/Yellow/Graphic/CardFlip/art.jpeg",
    },
    {
      image: "/Assets/icons/services/Yellow/Graphic/videos.png",
      name: "Videos",
      count: 499,
      desc: "Marketing Options",
      backVideo: "/Assets/icons/services/Yellow/Graphic/CardFlip/videos.mp4",
    },
  ];

  return (
    <>
      <Head>
        <title>Promotr - Graphic Designing</title>
        <meta
          name="description"
          content="Unlock the full potential of your brand with our exceptional graphic designing services. Our creative team transforms ideas into visually stunning designs that leave a lasting impact. From logo designs to marketing collaterals, we offer a wide range of graphic design solutions to enhance your brand identity. Elevate your brand's aesthetics and captivate your audience with our artistic expertise."
        />
      </Head>
      <section>
        <div className="h-[150px] sm:h-[350px] md:h-[450px]  bg-[var(--secondary-black)] w-full bg-center bg-no-repeat bg-cover opacity-100">
          {/* <ReactPlayer
            url="/Assets/Videos/graphic.mp4"
            width="100%"
            height="100%"
            muted={true}
            playing={true}
            pip={true}
          /> */}
          <h1 className="text-6xl text-center">
            Dear Tushar, Pay your web developer
          </h1>
        </div>
        {/* <div className="service-cards flex justify-center my-12 lg:my-28">
          <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {cardsData.map((eachCard, index) => {
              if (eachCard.backImage || eachCard.backVideo) {
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
        </div> */}
      </section>
    </>
  );
};

export default Marketing;
