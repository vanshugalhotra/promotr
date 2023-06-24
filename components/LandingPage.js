import React from "react";
import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="content relative h-[80vh] ">
      <div className="content-text-button relative p-2 md:px-8 top-[15%] md:left-[15%] md:max-w-[1238px] z-10 inline-flex flex-col items-center justify-center">
        <div className="content-text">
          <div className="lines md:inline-block absolute -left-5 -top-5 hidden">
            <Image
              alt=""
              src={"/Assets/others/lines.png"}
              width={40}
              height={40}
            />
          </div>
          <div className="text text-4xl md:text-8xl text-[var(--main-black)] font-medium text-center  leading-normal md:leading-[7.5rem] tracking-wide">
            <span className="">
              Your Brand&apos;s{" "}
              <span className="text-[var(--main-white)]">Biggest</span>{" "}
              Cheerleaders
            </span>
          </div>
          <div className="star absolute md:right-16 md:bottom-20">
            <Image
              alt=""
              src={"/Assets/others/star.png"}
              width={60}
              height={60}
            />
          </div>
        </div>
        <div className="button-div my-12 md:mx-2">
          <Link className="btn-primary" href={"/"}>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
