import React, { useRef } from "react";
import Link from "next/link";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ServiceCard = ({ name, desc, icon, url }) => {
  const bottomCurveRef = useRef(null);

  const handleMouseEnter = () => {
    bottomCurveRef.current.style.transform = "skewX(-45deg) scaleX(1)";
  };

  const handleMouseLeave = () => {
    bottomCurveRef.current.style.transform = "skewX(0) scaleX(0)";
  };

  return (
    <Link
      className="service-card relative mb-8 px-4 w-[250px] xs:w-[320px] cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      href={url}
    >
      <div className="inner-box relative block py-12 px-11 rounded-lg bg-[#ffffff] shadow-md">
        <div
          ref={bottomCurveRef}
          className="bottom-curve absolute -right-[70px] -bottom-[10px] w-[120px] h-[120px] bg-[#ffffff] opacity-10 z-0"
        ></div>
        <div className="icon-box relative block text-[var(--main-yellow)] text-[64px] leading-[1em] mb-5 transition-color duration-500 ease-in-out">
          <FontAwesomeIcon icon={icon} className="w-12 h-12" />
        </div>
        <h5 className="title h-12 text-[20px] uppercase font-semibold tracking-[1px] leading-[1.1em] mt-2 relative">
          <span className="text-[#222429] transition-color duration-500 ease-in-out cursor-pointer hover:underline">
            {name}
          </span>
        </h5>
        <div className="desc relative block text-[#686a6f] pt-7 z-1 leading-7 text-base">
          {desc}
        </div>
        <div className="link-box absolute right-[3px] bottom-[8px] w-[30px] h-[30px] z-10">
          <div className="relative leading-[30px] text-[20px] text-[var(--secondary-white)]">
            <FontAwesomeIcon
              icon={faAngleRight}
              className="font-thin w-6 h-6"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
