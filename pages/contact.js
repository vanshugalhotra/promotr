import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const Contact = () => {
  return (
    <div className="relative min-h-screen">
      {/* <div className="absolute inset-0 before:absolute before:inset-0 before:w-full before:h-full before:bg-[url('/Assets/background/bg3.jpg')] before:bg-center before:bg-no-repeat before:bg-cover before:opacity-90"></div> */}
      <Navbar />
      <div
        className="contact-info m-0 mt-5 flex-col lg:flex-row lg:my-5 lg:mx-36 border-2 border-gray-200 border-opacity-60 shadow-sm flex items-center justify-center z-[100]"
        id="getstarted"
      >
        <div className="contact-left z-40">
          <div className="contact-details pt-7 pb-10">
            <div className="contact-title text-4xl text-[var(--main-white)] capitalize tracking-wide text-center font-semibold px-4">
              Drop Your Information We&apos;ll Contact You
            </div>
            <div className="contact-desc text-lg py-10 px-7 lg:px-12 text-[var(--main-white)] font-medium leading-8 text-center !max-w-full">
              Experience personalized care, let&apos;s connect and make things
              happen!
            </div>
          </div>
          <h2 className="contact-form-title lg:text-2xl text-[var(--main-white)] text-center px-7 lg:p-0 text-xl">
            Tell us what are you looking for
          </h2>
        </div>
        <div className="contact-inputs w-[90%] lg:w-3/5 px-5 mt-10 lg:m-0 lg:px-12 z-40">
          <div className="right-contact-form">
            <div className="contact-form">
              <form action="https://fabform.io/f/kMrrySN" method="post">
                <input
                  type="text"
                  className="form-control !bg-white"
                  placeholder="Your Name Here*"
                  id="contact-name"
                  name="Name"
                />
                <input
                  type="email"
                  className="form-control !bg-white"
                  placeholder="Your Email Here"
                  id="contact-email"
                  name="Email"
                />
                <textarea
                  name="Message"
                  id="contact-desc"
                  rows="6"
                  cols="40"
                  className="form-control !bg-white"
                  placeholder="Type Your Message*"
                  area-invalid="false"
                ></textarea>
                <input
                  type="submit"
                  value="Send Message"
                  className="btn-primary send-btn my-8 mx-2"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
