import React from "react";
import Link from "next/link";

const SliderButton = ({ name, url, yellow, small }) => {
  return (
    <div className="pt-10">
      <Link
        href={url ? url : ""}
        className={`slider-button relative inline-block text-center uppercase leading-[0.05em] ${
          yellow
            ? "bg-[var(--color-yellow-1)] text-[var(--main-black)]"
            : "bg-[var(--secondary-black)] text-[var(--main-white)]"
        } rounded overflow-hidden transition-all duration-500 ease-in-out ${
          yellow
            ? "hover:bg-[var(--color-yellow-1)] hover:text-[var(--main-white)]"
            : "hover:bg-[var(--secondary-black)] hover:text-[var(--main-black)]"
        }`}
      >
        <div
          className={`button-curve absolute -right-[15px] top-0 w-[26px] h-full ${
            yellow
              ? " bg-[var(--secondary-black)] "
              : " bg-[var(--secondary-white)] "
          }opacity-20 z-0 -skew-x-[22deg] transition-all duration-500 ease-in-out`}
        ></div>
        <span
          className={`btn-title relative block text-sm leading-8 font-normal tracking-widest ${
            small ? "pt-[13px] pb-[14px]" : "pt-[19px] pb-[16px]"
          } px-[50px] z-10`}
        >
          {name}
        </span>
      </Link>
    </div>
  );
};

export default SliderButton;
