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
      image: "/Assets/icons/services/Yellow/Web/frontend.png",
      name: "Frontend Development",
      count: 499,
      desc: "Marketing Options",
    },
    {
      image: "/Assets/icons/services/Yellow/Web/backend.png",
      name: "Backend Development",
      count: 499,
      desc: "Marketing Options",
    },
    {
      image: "/Assets/icons/services/Yellow/Web/fullstack.png",
      name: "Full Stack Development",
      count: 499,
      desc: "Marketing Options",
    },
    {
      image: "/Assets/icons/services/Yellow/Web/maintainence.png",
      name: "Website Maintainence",
      count: 499,
      desc: "Marketing Options",
    },
    {
      image: "/Assets/icons/services/Yellow/Web/ecommerce.png",
      name: "E-commerce Development",
      count: 499,
      desc: "Marketing Options",
    },
    {
      image: "/Assets/icons/services/Yellow/Web/api.png",
      name: "API Integration",
      count: 499,
      desc: "Marketing Options",
    },
  ];

  return (
    <>
      <Head>
        <title>Promotr - Web Development</title>
        <meta
          name="description"
          content="Experience top-notch web development services tailored to your business goals. Our expert team of developers crafts cutting-edge websites and web applications using the latest technologies and best practices. Whether you need an engaging corporate website or a robust e-commerce platform, we've got you covered. Elevate your online presence with our seamless web development solutions."
        />
      </Head>
      <section>
        <div className="h-[150px] sm:h-[350px] md:h-[450px] w-full bg-center bg-no-repeat bg-cover opacity-100">
          {/* <ReactPlayer
            url="/Assets/Videos/web1.mp4"
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
        </div> */}
      </section>
    </>
  );
};

export default Marketing;
