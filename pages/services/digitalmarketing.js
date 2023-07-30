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
    <>
      <Head>
        <title>Promotr - Digital Marketing</title>
        <meta
          name="description"
          content="Unlock the power of digital marketing with our expert services. We offer a comprehensive range of digital marketing solutions including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content marketing, and more. Reach your target audience and drive business growth with our data-driven strategies."
        />
      </Head>
      <section>
        <div className="h-[150px] sm:h-[350px] md:h-[450px]  w-full bg-center bg-no-repeat bg-cover opacity-100">
          <ReactPlayer
            url="/Assets/Videos/digital.mp4"
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
