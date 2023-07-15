import React from "react";
import Image from "next/image";
import { Teko, Rubik } from "next/font/google";

const Teko_Font = Teko({ subsets: ["latin"], weight: ["400", "600"] });
const Rubik_Font = Rubik({ subsets: ["latin"], weight: ["400"] });

// Redux
import { useSelector } from "react-redux";
import Navbar from "./Navbar/Navbar";
import ServiceCardSmall from "./Cards/ServiceCardSmall";
import SliderButton from "./Buttons/SliderButton";

const LandingPage = () => {
  const windowWidth = useSelector((state) => state.global.windowWidth);

  let linesDim = 40;
  if (windowWidth <= 380) {
    linesDim = 20;
  } else if (windowWidth > 380 && windowWidth < 767) {
    linesDim = 30;
  }
  return (
    <>
      {/* main content */}
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0 before:absolute before:inset-0 before:w-full before:h-full before:bg-[url('/Assets/background/back.jpg')] before:bg-center before:bg-no-repeat before:bg-cover before:opacity-90"></div>
        <Navbar />
        <div className="content relative h-[90vh] flex items-center justify-center">
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
                <div className="absolute  top-[19%] left-[22%] xs:left-[15%] lg:top-[24%] lg:left-[15%] transform -translate-x-1/2 -translate-y-1/2 w-24 h-12 xs:w-32 xs:h-16 md:w-56 md:h-28 rounded-full z-0 bg-[#E9D175] opacity-80"></div>
                <div className={`relative z-10`}>
                  <div className="text-4xl xs:text-5xl md:text-8xl text-[var(--main-black)] font-semibold text-center md:leading-[7.5rem] leading-normal  tracking-wide">
                    <span className="relative">
                      Your
                      <span className="text-[var(--main-white)]">
                        {" "}
                        Brand&apos;s
                      </span>{" "}
                      Biggest Cheerleaders
                    </span>
                    <h6 className="text-base capitalize tracking-wider">Co-powered by AI</h6>
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
              {/* <PrimaryButton name={"Get Started"} url={"/services/services"} /> */}
              <SliderButton
                name={"Get Started"}
                url={"/services/services"}
                yellow={false}
              />
            </div>
          </div>
        </div>
      </div>

      {/* services content */}
      <div className="bg-[var(--secondary-black)] relative w-full mb-16">
        <div className="absolute inset-0 before:absolute before:inset-0 before:w-full before:h-full before:bg-[url('/Assets/others/shape.png')] before:bg-center before:bg-no-repeat before:bg-cover before:opacity-[0.02] before:-z-0 before:invert"></div>
        {/* Your content here */}
        <div className="services-content py-12 md:py-20 lg:py-28 flex justify-center items-center ">
          <div className="content grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:max-w-[1200px] mx-auto gap-5 items-center justify-center">
            <div
              className={`services-title-box col-span-1 xl:col-span-2 px-12 py-6`}
            >
              <div className={Teko_Font.className}>
                <div
                  className={`title text-[50px] md:text-[60px] lg:text-[70px] leading-[0.9em] font-medium tracking-wide text-[var(--secondary-white)] uppercase`}
                >
                  WE SHAPE THE PERFECT SOLUTIONS{" "}
                  <span className="text-[var(--color-yellow-1)]">.</span>
                </div>
              </div>
              <div
                className={`desc pt-10 text-[var(--color-grey-2)] leading-7 ${Rubik_Font.className}`}
              >
                We are committed to providing our customers with exceptional
                service while offering our employees the best training.
              </div>
            </div>
            <div className="flex justify-center">
              <ServiceCardSmall
                name={"Web Development"}
                image={"/Assets/icons/services/Yellow/web_development.png"}
                imageHover={"/Assets/icons/services/Black/web_development.png"}
                counter={"01"}
                url={"/services/web_development"}
              />
            </div>
            <div className="flex justify-center">
              <ServiceCardSmall
                name={"Graphic Designing"}
                image={"/Assets/icons/services/Yellow/graphic_design.png"}
                imageHover={"/Assets/icons/services/Black/graphic_design.png"}
                counter={"02"}
                url={"/services/graphic_designing"}
              />
            </div>
            <div className="flex justify-center">
              <ServiceCardSmall
                name={"Digital Marketing"}
                image={"/Assets/icons/services/Yellow/digital_marketing.png"}
                imageHover={
                  "/Assets/icons/services/Black/digital_marketing.png"
                }
                counter={"03"}
                url={"/services/traditionalmarketing"}
              />
            </div>
            <div className="flex justify-center">
              <ServiceCardSmall
                name={"Traditional Marketing"}
                image={
                  "/Assets/icons/services/Yellow/traditional_marketing.png"
                }
                imageHover={
                  "/Assets/icons/services/Black/traditional_marketing.png"
                }
                counter={"04"}
                url={"/services/digitalmarketing"}
              />
            </div>
            <div className="services-title-box col-span-1 xl:col-span-2 px-12 py-6">
              <div className={Teko_Font.className}>
                <div
                  className={`title text-[50px] md:text-[60px] lg:text-[70px] leading-[0.9em] font-medium tracking-wide text-[var(--secondary-white)] uppercase`}
                >
                  WE SHAPE THE PERFECT SOLUTIONS{" "}
                  <span className="text-[var(--color-yellow-1)]">.</span>
                </div>
              </div>
              <div
                className={`desc pt-10 text-[var(--color-grey-2)] leading-7 ${Rubik_Font.className}`}
              >
                We are committed to providing our customers with exceptional
                service while offering our employees the best training.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`relative p-0 z-[1] contact-with-us-card ${Teko_Font.className}`}
      >
        <div className="container static max-w-[1200px] px-4 mx-auto">
          <div className="inner relative block pt-[70px] pb-[60px] px-[20px] md:pt-[95px] md:px-[95px] md:pb-[68px] bg-[var(--color-yellow-1)] text-[var(--secondary-black)] rounded-lg overflow-hidden -bottom-[60px] -mt-[60px]">
            <div className="shape-1 absolute right-0 top-0 w-[340px] max-w-full h-full bg-[url('/Assets/others/call-to-shape-1.png')] bg-right-top bg-no-repeat z-[1]"></div>
            <div className="shape-2 absolute right-[170px] top-0 w-[410px] h-[54px] bg-[url('/Assets/others/call-to-shape-2.png')] z-0 bg-right-top bg-no-repeat"></div>
            <h2 className="relative text-center md:text-start md:float-left block text-[45px] md:text-[60px] leading-[0.85em] uppercase text-[var(--secondary-black)] font-medium mb-[10px] md:mb-[25px] z-[3]">
              Let&apos;s Get your project <br />
              Started!
            </h2>
            <div className="link-box relative text-center md:float-right z-[3]">
              <SliderButton
                name={"Contact with us"}
                url={"/contact"}
                small={windowWidth < 768}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
