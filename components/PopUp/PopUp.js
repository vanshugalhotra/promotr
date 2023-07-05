import React from "react";
import { useDispatch } from "react-redux";
import { closePopup } from "@/slices/servicesSlice";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import SliderButton from "../Buttons/SliderButton";

const PopUp = () => {
  const dispatch = useDispatch();

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="popup bg-gray-800 bg-opacity-75 w-full h-full flex items-center justify-center">
        <div className="popup-content bg-white w-[90vw] lg:w-[60vw] min-h-[60vh] flex relative">
          {/* Cross Icon */}
          <div
            className="cross-icon absolute top-0 right-0 m-4 cursor-pointer"
            onClick={() => {
              dispatch(closePopup());
            }}
          >
            <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
          </div>
          <div className="left hidden lg:block w-2/5 relative">
            <Image
              alt=""
              src="/Assets/background/itson.jpg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="right flex flex-col px-8 w-full lg:w-3/5">
            <div className="heading uppercase text-3xl my-12 lg:my-4 text-center font-semibold">
              Get in Touch !!
            </div>
            <div className="form">
              <input
                type="text"
                className="form-control !py-3"
                placeholder="Name*"
                id="popup-name"
                name="Name"
              />
              <input
                type="text"
                className="form-control !py-3"
                placeholder="Phone Number*"
                id="popup-phone"
                name="Phone"
              />
              <textarea
                name="Message"
                id="contact-desc"
                rows="3"
                cols="40"
                className="form-control"
                placeholder="Type Your Message*"
                area-invalid="false"
              ></textarea>
              <SliderButton name={"Submit"} yellow={true} small={true}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
