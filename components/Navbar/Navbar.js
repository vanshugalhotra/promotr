import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Redux
import { useSelector } from "react-redux";

// Icons import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const windowWidth = useSelector((state) => state.global.windowWidth);

  // Local States
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showDropdownTimeout, setShowDropdownTimeout] = useState(null);

  const handleMouseEnter = () => {
    clearTimeout(showDropdownTimeout);
    setShowServicesDropdown(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowServicesDropdown(false);
    }, 200); // Adjust the delay duration as needed (in milliseconds)
    setShowDropdownTimeout(timeout);
  };

  const handleDropdownFocus = () => {
    clearTimeout(showDropdownTimeout);
    setShowServicesDropdown(true);
  };

  const handleDropdownBlur = () => {
    setShowServicesDropdown(false);
  };
  return (
    <nav
      id="navbar"
      className="flex items-center justify-around border-b border-b-[var(--color-grey-1)]"
    >
      <div className="menu-bar md:hidden text-2xl mx-6">
        <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
      </div>
      <Link className="nav-logo" href={"/"}>
        <Image
          alt="Promotr"
          src={"/Assets/logo/logo_white.png"}
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

          <li
            className="nav-item relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="bottom-line flex items-center justify-center cursor-pointer focus:outline-none"
              onClick={() => {
                setShowServicesDropdown(!showServicesDropdown);
              }}
            >
              Services
              <FontAwesomeIcon icon={faCaretDown} className="w-4 h-4 ml-2" />
            </button>
            {showServicesDropdown && (
              <div
                className=""
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onFocus={handleDropdownFocus}
                onBlur={handleDropdownBlur}
              >
                <ul
                  className={`absolute py-2 bg-[var(--main-white)] rounded-md shadow-lg cursor-pointer z-[100] mt-4`}
                >
                  <li>
                    <Link href={"/service1"} className="dropdown-link">
                      Marketing
                    </Link>
                  </li>
                  <li>
                    <Link href={"/service2"} className="dropdown-link">
                      Graphic Designing
                    </Link>
                  </li>
                  <li>
                    <Link href={"/service3"} className="dropdown-link">
                      Web Development
                    </Link>
                  </li>
                </ul>
              </div>
            )}
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
            <Link href={"/contact"} className="bottom-line">
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
