import React from "react";

const Contact = () => {
  return (
    <div
      className="contact-info m-0 mt-5 flex-col lg:flex-row lg:my-5 lg:mx-36 border-2 border-gray-200 border-opacity-60 shadow-md flex items-center justify-center"
      id="getstarted"
    >
      <div className="contact-left">
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
      <div className="contact-inputs w-[90%] lg:w-3/5 px-5 mt-10 lg:m-0 lg:px-12">
        <div className="right-contact-form">
          <div className="contact-form">
            <form action="https://fabform.io/f/kMrrySN" method="post">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name Here*"
                id="contact-name"
                name="Name"
              />
              <input
                type="email"
                className="form-control"
                placeholder="Your Email Here"
                id="contact-email"
                name="Email"
              />
              <textarea
                name="Message"
                id="contact-desc"
                rows="6"
                cols="40"
                className="form-control"
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
  );
};

export default Contact;
