import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "@/slices/navbarSlice";

// Icons import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const dispatch = useDispatch();

  // Redux States
  const windowWidth = useSelector((state) => state.global.windowWidth);
  const isOpen = useSelector((state) => state.navbar.isOpen);

  // Local States
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showDropdownTimeout, setShowDropdownTimeout] = useState(null);

  // local functions

  const toggleMenu = () => {
    dispatch(toggle());
  };

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
    <>
      <nav
        id="navbar"
        className="flex items-center justify-around border-b border-b-[var(--color-grey-1)]"
      >
        <button
          className="menu-bar md:hidden text-2xl mx-6 z-20"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
        </button>
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
                    className={`absolute py-2 bg-[var(--main-white)] bg-opacity-80 rounded-md shadow-lg cursor-pointer z-[100] mt-4`}
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

      {/* mobile view */}
      <div
        className={`md:hidden mobile-view bg-[var(--main-black)] absolute inset-x-0 top-0 z-20 w-full px-6 py-4 transform ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center transition-all duration-500 ease-in-out`}
      >
        <div className="flex flex-col md:flex-row md:mx-6">
          <Link className="mobile-link" href={"/"}>
            Home
          </Link>
          <div>
            <button
              className="mobile-link flex items-center cursor-pointer focus:outline-none"
              href={"/"}
            >
              Services
              <FontAwesomeIcon icon={faCaretDown} className="w-4 h-4 ml-2" />
            </button>
          </div>
          <Link className="mobile-link" href={"/"}>
            Events
          </Link>
          <Link className="mobile-link" href={"/"}>
            About Us
          </Link>
          <Link className="mobile-link" href={"/"}>
            Contact
          </Link>
        </div>
        <button
          className="close-icon absolute top-4 right-4"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faXmark} className="w-6 h-6 text-white" />
        </button>
      </div>
    </>
  );
};

export default Navbar;
