import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";

import { useDispatch } from "react-redux";

import {
  FaTelegramPlane,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import { raiseToast } from "@/utils/utilityFuncs";

import { Manrope } from "next/font/google";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import { setLoading } from "@/slices/globalSlice";

const Manrope_Font = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "800"],
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    queryFrom: "Contact Form",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(setLoading(true));
    try {
      // Send the form data to the serverless function
      const response = await fetch("/api/contact/formtoemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response) {
        dispatch(setLoading(false));
      }
      if (response.ok) {
        // Reset the form after successful submission
        setFormData({
          name: "",
          email: "",
          description: "",
          queryFrom: "Contact Form",
        });
        raiseToast("success", "Form Submitted Successfully!!🤞");
      } else {
        raiseToast("error", "There was an error while submitting the form");
      }
    } catch (error) {
      raiseToast("error", "There was an error while submitting the form");
    }
  };

  return (
    <>
      <Head>
        <title>Promotr - Contact Us</title>
        <meta
          name="description"
          content="Get in touch with our marketing agency today! Contact us for effective marketing solutions tailored to your business needs. Let's work together to boost your online presence and achieve your goals."
        ></meta>
      </Head>
      <div className={`relative min-h-screen ${Manrope_Font.className}`}>
        <Navbar />
        <div className="h-[60vh] w-full flex items-center bg-[url('/Assets/background/bg4.jpg')] bg-center bg-no-repeat bg-cover opacity-100">
          <div className="heading relative ml-10 lg:ml-20 text-4xl xs:text-5xl leading-snug lg:text-7xl text-[var(--main-white)] capitalize font-extrabold">
            <span>Dear Tushar, Pay your web developer</span>
          </div>
        </div>
        {/* <div
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
                        name="name"
                        onChange={handleChange}
                        value={formData.name}
                      />
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 basis-auto w-full my-8">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email*"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
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
                        onChange={handleChange}
                        value={formData.description}
                      ></textarea>
                    </div>
                    <div className="submit-btn my-6" onClick={handleSubmit}>
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
                      +91-6283910290
                    </span>
                  </div>
                  <div className="contact-address-item">
                    <h3 className="title font-extrabold text-lg leading-[1.3]">
                      Location
                    </h3>
                    <span className="data font-normal text-base py-4 inline-block capitalize">
                      SCO- 134-135, first floor, Sector 34A, Chandigarh
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
        </div> */}
        <div className="map-section w-full mt-8 xl:mt-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d214.3665295730637!2d76.76853010573551!3d30.72221021188915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDQzJzIwLjEiTiA3NsKwNDYnMDcuMSJF!5e0!3m2!1sen!2sin!4v1690392094439!5m2!1sen!2sin"
            className="w-[98vw] h-[500px]"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
