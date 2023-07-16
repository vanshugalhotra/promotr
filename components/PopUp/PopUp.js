import React from "react";
import { useDispatch } from "react-redux";
import { closePopup } from "@/slices/servicesSlice";
import ReactPlayer from "react-player/lazy";

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
            <ReactPlayer
              url="/Assets/Videos/popup.mp4"
              width="100%"
              height="100%"
              muted={true}
              playing={true}
              pip={true}
            />
          </div>
          <div className="right flex flex-col px-8 w-full lg:w-3/5">
            <div className="heading uppercase text-3xl my-12 lg:my-4 text-center font-semibold">
              Get in Touch !!
            </div>
            <div className="form">
              <div className="flex-grow-0 flex-shrink-0 basis-auto w-full mb-4">
                <input
                  type="text"
                  className="form-control !pb-4"
                  placeholder="Name"
                />
              </div>
              <div className="flex-grow-0 flex-shrink-0 basis-auto w-full my-8">
                <input
                  type="text"
                  className="form-control !pb-4"
                  placeholder="Email or Phone*"
                />
              </div>
              <div className="flex-grow-0 flex-shrink-0 basis-auto w-full mt-8">
                <textarea
                  name="description"
                  id="description"
                  cols="30"
                  rows="3"
                  className="form-control !pb-4"
                  placeholder="Type your message"
                ></textarea>
              </div>
              <SliderButton name={"Submit"} yellow={true} small={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
