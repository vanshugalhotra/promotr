import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import React from "react";
import Link from "next/link";

import {
  FaTelegramPlane,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import { Manrope } from "next/font/google";
import SecondaryButton from "@/components/Buttons/SecondaryButton";

const Manrope_Font = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "800"],
});

const Contact = () => {
  return (
    <div className={`relative min-h-screen ${Manrope_Font.className}`}>
      <Navbar />
      <div className="h-[60vh] w-full flex items-center bg-[url('/Assets/background/bg4.jpg')] bg-center bg-no-repeat bg-cover opacity-100">
        <div className="heading relative ml-10 lg:ml-20 text-4xl xs:text-5xl leading-snug lg:text-7xl text-[var(--main-white)] capitalize font-extrabold">
          <span>Feel free to contact us</span>
        </div>
      </div>
      <div
        className="contact-section py-16 bg-[url('/Assets/others/map.png')] relative bg-center"
        id="contactus"
      >
        <div className="shape-right-bottom absolute right-0 bottom-0 max-w-[45%] z-0">
          <Image
            alt=""
            src={"/Assets/others/shape2.png"}
            style={{ objectFit: "cover" }}
            width={1000}
            height={536}
          />
        </div>
        <div className="contact-container flex justify-center items-center flex-col lg:flex-row">
          <div className="contact-left  w-full lg:w-[45%] flex-grow-0 flex-shrink-0 basis-auto py-1 px-0 xs:p-2">
            <div className="contact-form p-10 lg:p-20 shadow-sm lg:shadow-lg bg-white relative z-[1]">
              <h3 className="sub-title uppercase mb-3 text-xl text-[var(--main-black)] font-extrabold inline-block relative tracking-wider">
                Got a problem?
              </h3>
              <h1 className="title text-4xl leading-[1.3] font-extrabold capitalize">
                we have a solution.
              </h1>
              <div className="form mt-12">
                <div className="form-control-box flex flex-wrap">
                  <div className="flex-grow-0 flex-shrink-0 basis-auto w-full mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="flex-grow-0 flex-shrink-0 basis-auto w-full my-8">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email*"
                    />
                  </div>
                  <div className="flex-grow-0 flex-shrink-0 basis-auto w-full my-8">
                    <textarea
                      name="description"
                      id="description"
                      cols="30"
                      rows="5"
                      className="form-control"
                      placeholder="Tell Us About Your Project"
                    ></textarea>
                  </div>
                  <div className="submit-btn my-6">
                    <SecondaryButton
                      name={"Get in touch"}
                      icon={<FaTelegramPlane />}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-right w-full lg:w-1/3 m-6 lg:ml-20 flex items-center justify-center flex-grow-0 flex-shrink-0 basis-auto z-50">
            <div className="contact-info px-8 lg:p-0">
              <div className="title mb-10">
                <span className="font-extrabold text-4xl tracking-wide capitalize mb-6 inline-block">
                  Contact Information
                </span>
                <p className="text-lg text-[var(--color-grey-2)]">
                  Plan upon yet way get cold spot its week. Almost do am or
                  limits hearts. Resolve parties.
                </p>
              </div>
              <div className="contact-address grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="contact-address-item">
                  <h3 className="title font-extrabold text-lg leading-[1.3]">
                    Phone
                  </h3>
                  <span className="data font-normal text-base py-4 inline-block">
                    +91-8427733664
                  </span>
                </div>
                <div className="contact-address-item">
                  <h3 className="title font-extrabold text-lg leading-[1.3]">
                    Location
                  </h3>
                  <span className="data font-normal text-base py-4 inline-block">
                    Sector 34C, Chandigarh
                  </span>
                </div>
                <div className="contact-address-item">
                  <h3 className="title font-extrabold text-lg leading-[1.3]">
                    Email
                  </h3>
                  <span className="data font-normal text-base py-4 inline-block cursor-pointer transition-all duration-200 hover:text-[var(--color-yellow-1)]">
                    contact@promotr.co.in
                  </span>
                </div>
                <div className="contact-address-item">
                  <h3 className="title font-extrabold text-lg leading-[1.3]">
                    Follow Us
                  </h3>
                  <div className="contact-social-links py-4 flex items-center justify-start space-x-2">
                    <Link
                      className="contact-social-link"
                      href={"https://www.instagram.com/promotr.co/"}
                      target="_blank"
                    >
                      <FaInstagram />
                    </Link>
                    <Link
                      className="contact-social-link"
                      href={
                        "https://www.linkedin.com/in/promotr-agency-08843027b"
                      }
                      target="_blank"
                    >
                      <FaLinkedinIn />
                    </Link>
                    <Link
                      className="contact-social-link"
                      href={
                        "https://twitter.com/promotr_co?t=8wfbhW0rHHzuD8kcE4GASw&s=08"
                      }
                      target="_blank"
                    >
                      <FaTwitter />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="map-section w-full mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3237.32578397747!2d76.7665321013762!3d30.72326344806705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1689451230242!5m2!1sen!2sin"
          className="w-[98vw] h-[500px]"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
