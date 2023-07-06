import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="py-11 footer bg-[var(--secondary-black)] bg-[url('/Assets/others/footer-bg.png')] flex justify-center text-[var(--color-grey-2)] gap-5">
      <div className="px-4 xs:px-16 py-3 xl:px-28 xl:py-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        <div className="grid-item  mx-4">
          <div className="image mb-2">
            <Image
              alt="Promotr"
              src={"/Assets/logo/promotr.png"}
              width={200}
              height={200}
              className="invert"
            />
          </div>
          <div className="desc mb-8 leading-8 font-normal tracking-wide">
            Welcome to our web design agency. Lorem ipsum simply free text dolor
            sited amet cons cing elit.
          </div>
          <div className="social-links flex space-x-5">
            <Link
              href={"https://www.instagram.com/promotr.co/"}
              className="social-link"
              target="_blank"
            >
              <FaInstagram />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/promotr-agency-08843027b"}
              className="social-link"
              target="_blank"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href={
                "https://twitter.com/promotr_co?t=8wfbhW0rHHzuD8kcE4GASw&s=08"
              }
              className="social-link"
              target="_blank"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
        <div className="grid-item">
          <div
            className="title uppercase text-[var(--secondary-white)] text-xl leading-8 tracking-wide mb-2 font-semibold py-8 px-4
          "
          >
            explore
          </div>
          <div className="explore-items flex">
            <div className="row-1 flex flex-col mr-8">
              <Link href={"/about"} className="explore-item">
                About
              </Link>
              <Link href={"/services"} className="explore-item">
                Services
              </Link>
              <Link href={"/events"} className="explore-item">
                Events
              </Link>
              <Link href={"/contact"} className="explore-item">
                Contact
              </Link>
            </div>
            <div className="row-2 flex flex-col ml-2">
              <Link
                href={"/services/traditionalmarketing"}
                className="explore-item"
              >
                Traditional Marketing
              </Link>
              <Link
                href={"/services/digitalmarketing"}
                className="explore-item"
              >
                Digital Marketing
              </Link>
              <Link
                href={"/services/graphic_designing"}
                className="explore-item"
              >
                Graphic Designing
              </Link>
              <Link href={"/services/web_development"} className="explore-item">
                Web Development
              </Link>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div
            className="title uppercase text-[var(--secondary-white)] text-xl leading-8 tracking-wide mb-2 font-semibold py-8 px-4
          "
          >
            contact
          </div>
          <div className="explore-items flex flex-col">
            <Link
              href={"mailto:contact@promotr.co.in"}
              className="flex items-center space-x-4"
            >
              <MdEmail className="text-[var(--color-yellow-1)]" />{" "}
              <span className="explore-item !normal-case">
                contact@promotr.co.in
              </span>
            </Link>
          </div>
        </div>
        <div className="grid-item">
          <div
            className="title uppercase text-[var(--secondary-white)] text-xl leading-8 tracking-wide mb-2 font-semibold py-8 px-4
          "
          >
            newsletter
          </div>
          <div className="form mb-8">
            <div className="newsletter-form relative outline-none border-none">
              <input
                type="text"
                className="outline-none border-none relative w-full leading-8 py-5 pl-6 pr-16 h-[70px] block bg-[var(--color-black-1)] rounded text-[var(--secondary-white)] border border-[var(--color-black-1)] transition-all duration-300 ease-in-out text-sm"
                placeholder="Email Address"
              />
              <div className="icon flex justify-center items-center absolute right-[12px] top-[12px] w-[44px] h-[44px] bg-[var(--color-yellow-1)] text-[var(--color-black-1)] rounded-full cursor-pointer transition-all duration-200 ease-linear hover:bg-[var(--secondary-white)] hover:text-[var(--color-yellow-1)]">
                <MdEmail className="text-lg" />
              </div>
            </div>
          </div>
          <div className="desc leading-8 text-base">
            Sign up for our latest news & articles. We won’t give you spam
            mails.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
