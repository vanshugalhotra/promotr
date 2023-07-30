import React from "react";

import { useSelector } from "react-redux";

import dynamic from "next/dynamic";
import Head from "next/head";
import SingleServiceCardBig from "@/components/Cards/SingleServiceCardBig";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const PopUp = dynamic(() => import("@/components/PopUp/PopUp")); // lazy loading the component

const Marketing = () => {
  const showPopup = useSelector((state) => state.services.showPopup);
  const windowWidth = useSelector((state) => state.global.windowWidth);

  const cardsData = [
    {
      image: "/Assets/vectors/corporate.jpg",
      name: "corporate events",
      desc: "From concept to execution, flawlessly orchestrating your corporate events.",
    },

    {
      image: "/Assets/vectors/educational.jpg",
      name: "educational events",
      desc: "Empowering minds, seamless educational event management.",
    },
    {
      image: "/Assets/vectors/political.jpg",
      name: "Political Management",
      desc: "Strategic expertise for successful political campaigns and governance.",
    },
    {
      image: "/Assets/vectors/wedding.jpg",
      name: "Wedding Planning",
      desc: "Love and logistics, hand in hand – your perfect wedding planner.",
      popupForm: false,
    },
  ];

  return (
    <>
      <Head>
        <title>Promotr - Event Management</title>
        <meta
          name="description"
          content="Leave the details to us and make your events unforgettable with our expert event management services. From political gatherings to educational events, and from dream weddings to corporate functions, we excel in delivering seamless and memorable experiences. Our dedicated team handles every aspect, ensuring flawless execution and creating moments that leave a lasting impression. Trust us to turn your vision into reality for any event you envision."
        />
      </Head>
      <section>
        <div className="h-[150px] sm:h-[350px] md:h-[450px]  w-full bg-center bg-no-repeat bg-cover opacity-100">
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
              if (index === 3) {
                return (
                  <>
                    {windowWidth >= 1280 && (
                      <div key={`empty-${index}`} className="empty-item"></div>
                    )}
                    <SingleServiceCardBig key={index} {...eachCard} />
                  </>
                );
              } else {
                return <SingleServiceCardBig key={index} {...eachCard} />;
              }
            })}
          </div>

          {showPopup && <PopUp />}
        </div>
      </section>
    </>
  );
};

export default Marketing;
