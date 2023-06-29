import React from "react";
import Link from "next/link";

const SliderButton = ({ name, url }) => {
  return (
    <Link href={url} className="slider-button relative float-right pt-6 z-10">
      <div className="btn relative inline-block text-center uppercase tracking-tighter bg-[var(--main-black)] text-[var(--main-white)] rounded-md overflow-hidden transition-all duration-500 ease-in-out">
        <div className="btn-curve absolute -right-[15px] top-0 w-[26px] h-full bg-[var(--secondary-white)] opacity-20 z-0 -skew-x-[22deg]"></div>
        <div className="btn-title relative block text-sm font-normal pt-[19px] pb-[16px] px-12 z-10 tracking-widest">
          {name}
        </div>
      </div>
    </Link>
  );
};

export default SliderButton;
