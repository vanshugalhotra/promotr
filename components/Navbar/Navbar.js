import React from "react";
import Link from "next/link";
import Image from "next/image";

// Redux
import { useSelector } from "react-redux";

// Icons import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const windowWidth = useSelector((state) => state.global.windowWidth);

  return (
    <nav
      id="navbar"
      className="flex items-center justify-around border-b border-b-[var(--color-grey-1)] bg-[var(--main-yellow)]"
    >
      <div className="menu-bar md:hidden text-2xl mx-6">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <Link className="nav-logo" href={"/"}>
        <Image
          alt="Promotr"
          src={"/Assets/logo/logo.png"}
          width={windowWidth > 768 ? 170 : 220}
          height={windowWidth > 768 ? 170 : 220}
        />
      </Link>
      <div className="nav-items-container">
        <ul className="nav-items md:flex hidden items-center justify-center">
          <li className="nav-item">
            <Link href={"/"} className="bottom-line">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href={"/"} className="bottom-line">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link href={"/"} className="bottom-line">
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link href={"/"} className="bottom-line">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link href={"/"} className="bottom-line">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-icons"></div>
    </nav>
  );
};

export default Navbar;
