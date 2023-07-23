import React from "react";
import Image from "next/image";

// redux
import { useDispatch } from "react-redux";
import { openPopup } from "@/slices/servicesSlice";
import { Manrope } from "next/font/google";

const Manrope_Font = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "800"],
});

const SingleServiceCardBig = ({ image, name, desc }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openPopup());
  };

  return (
    <div
      className={`${Manrope_Font.className} events-card shadow cursor-pointer transition-all duration-300 ease-in w-[250px] xs:w-[300px] lg:w-[380px] min-h-[360px] sm:min-h-[360px] overflow-hidden border border-gray-200 border-opacity-60`}
      onClick={handleClick}
    >
      <div className="relative thumbnail h-[235px]">
        <Image
          alt=""
          src={image}
          layout="fill"
          style={{ objectFit: "cover" }}
          className="relative h-full"
        />
      </div>
      <div className="content pt-0 py-8 px-6 w-full -mt-[150px] translate-y-[143px] relative border-t-[4px] border-t-[var(--main-yellow)]  transition-all duration-300 ease-linear shadow-md bg-[var(--secondary-white)]">
        <div className="title text-xl sm:text-2xl text-center my-4 capitalize text-[#162466] font-extrabold">
          {name}
        </div>
        <div className="line mb-4 text-xs capitalize text-gray-500 tracking-wider text-center font-medium">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default SingleServiceCardBig;
