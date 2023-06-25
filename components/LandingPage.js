import React from "react";
import Image from "next/image";
import Link from "next/link";

// Redux
import { useSelector } from "react-redux";
import Navbar from "./Navbar/Navbar";

const LandingPage = () => {
  const windowWidth = useSelector((state) => state.global.windowWidth);

  let linesDim = 40;
  if (windowWidth <= 380) {
    linesDim = 20;
  } else if (windowWidth > 380 && windowWidth < 767) {
    linesDim = 30;
  }
  return (
    <div className=" bg-[var(--main-yellow)] ">
      <Navbar />
      <div className="content relative h-[80vh] flex items-center justify-center">
        <div className="content-text-button relative p-2 md:px-8  md:max-w-[1238px] z-10 inline-flex flex-col items-center justify-center">
          <div className="content-text">
            <div className="lines lg:inline-block absolute -top-4 left-16 hidden">
              <Image
                alt=""
                src={"/Assets/others/lines.png"}
                width={linesDim}
                height={linesDim}
              />
            </div>

            <div className="relative">
              <div className="absolute  top-[19%] left-[22%] xs:left-[15%] lg:top-[24%] lg:left-[15%] transform -translate-x-1/2 -translate-y-1/2 w-24 h-12 xs:w-32 xs:h-16 md:w-56 md:h-28   rounded-full z-0 bg-[#E9D175]"></div>
              <div className="relative z-10">
                <div className="text-4xl xs:text-5xl md:text-8xl text-[var(--main-black)] font-semibold text-center !leading-normal md:leading-[7.5rem] tracking-wide">
                  <span className="relative">
                    Your
                    <span className="text-[var(--main-white)]">
                      {" "}
                      Brand&apos;s
                    </span>{" "}
                    Biggest Cheerleaders
                  </span>
                </div>
              </div>
              <div className="star absolute right-2 bottom-8">
                <Image
                  alt=""
                  src={"/Assets/others/star.png"}
                  width={windowWidth > 380 ? 60 : 40}
                  height={windowWidth > 380 ? 60 : 40}
                />
              </div>
            </div>
          </div>
          <div className="button-div my-12 md:mx-2">
            <Link className="btn-primary" href={"/contact"}>
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
