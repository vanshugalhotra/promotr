import React, { useRef, useState } from "react";
import Image from "next/image";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceCardSmall = ({ name, icon, counter, image, imageHover }) => {
  const bottomCurveRef = useRef(null);

  // local states
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    bottomCurveRef.current.style.transform = "skewX(-35deg) scaleX(1)";
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    bottomCurveRef.current.style.transform = "skewX(0) scaleX(0)";
    setIsHovered(false);
  };
  return (
    <div
      className="service-card-small relative mb-8 px-4 w-[270px] xs:w-[320px] cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="box relative block py-12 px-11 rounded-lg bg-[var(--color-black-1)] overflow-hidden">
        <div
          ref={bottomCurveRef}
          className="bottom-curve absolute -right-[70px] bottom-0 w-[100px] h-4/5 bg-[var(--secondary-black)] opacity-20 z-0"
        ></div>
        <div className="top flex justify-between items-center">
          <div className="counter text-[35px] xs:text-[46px] leading-[1em] text-[var(--secondary-white)] opacity-[0.07] font-light mb-8 z-10">
            {counter}
          </div>
          <div className="icon-box relative block text-[var(--color-yellow-1)] text-[64px] leading-[1em] mb-5 transition-color duration-500 ease-in-out">
            {icon && (
              <FontAwesomeIcon
                icon={icon}
                className="xs:w-12 xs:h-12 w-8 h-8"
              />
            )}
            {image && !isHovered && (
              <Image alt="" width={50} height={50} src={image} />
            )}
            {imageHover && isHovered && (
              <Image alt="" width={50} height={50} src={imageHover} />
            )}
          </div>
        </div>
        <h5 className="title h-12 text-[17px] uppercase font-semibold tracking-[1px] leading-[1.1em] mt-2 relative max-w-[30px]">
          <span className="text-[var(--secondary-white)] transition-color duration-500 ease-in-out cursor-pointer hover:underline">
            {name}
          </span>
        </h5>
      </div>
    </div>
  );
};

export default ServiceCardSmall;
