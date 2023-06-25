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

const NavItem = ({ name, url }) => {
  return (
    <li className="nav-item">
      <Link href={url} className="bottom-line">
        {name}
      </Link>
    </li>
  );
};

const NavItemDropDown = ({
  handleMouseEnter,
  handleMouseLeave,
  handleDropDownFocus,
  handleDropDownBlur,
  toggleDropDown,
  showDropDown,
  name,
  links,
}) => {
  return (
    <li
      className="nav-item relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="bottom-line flex items-center justify-center cursor-pointer focus:outline-none"
        onClick={toggleDropDown}
      >
        {name}
        <FontAwesomeIcon icon={faCaretDown} className="w-4 h-4 ml-2" />
      </button>
      {showDropDown && (
        <div
          className=""
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleDropDownFocus}
          onBlur={handleDropDownBlur}
        >
          <ul
            className={`absolute py-2 bg-[var(--main-white)] bg-opacity-80 rounded-md shadow-lg cursor-pointer z-[100] mt-4`}
          >
            {links.map(({ name, url }, index) => {
              return (
                <li key={index}>
                  <Link href={url} className="dropdown-link">
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </li>
  );
};

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

  const toggleServicesDropDown = () => {
    setShowServicesDropdown(!showServicesDropdown);
  };

  const handleServicesMouseEnter = () => {
    clearTimeout(showDropdownTimeout);
    setShowServicesDropdown(true);
  };

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowServicesDropdown(false);
    }, 200); // Adjust the delay duration as needed (in milliseconds)
    setShowDropdownTimeout(timeout);
  };

  const handleServicesDropDownFocus = () => {
    clearTimeout(showDropdownTimeout);
    setShowServicesDropdown(true);
  };

  const handleServicesDropDownBlur = () => {
    setShowServicesDropdown(false);
  };

  // Local Variables

  const navbarLinks = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Services",
      url: "/",
      dropdown: {
        links: [
          {
            name: "Marketing",
            url: "/marketing",
          },
          {
            name: "Graphic Designing",
            url: "/graphic_designing",
          },
          {
            name: "Web Development",
            url: "/webdevelopment",
          },
        ],
        toggleDropDown: toggleServicesDropDown,
        showDropDown: showServicesDropdown,
        handleMouseEnter: handleServicesMouseEnter,
        handleMouseLeave: handleServicesMouseLeave,
        handleDropDownBlur: handleServicesDropDownBlur,
        handleDropDownFocus: handleServicesDropDownFocus,
      },
    },
    {
      name: "Events",
      url: "/events",
    },
    {
      name: "About Us",
      url: "/about",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

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
            {navbarLinks.map(({ name, url, dropdown }) => {
              if (dropdown) {
                return (
                  <NavItemDropDown
                    key={name}
                    name={name}
                    links={dropdown.links}
                    handleMouseEnter={dropdown.handleMouseEnter}
                    handleMouseLeave={dropdown.handleMouseLeave}
                    handleDropDownBlur={dropdown.handleDropDownBlur}
                    handleDropDownFocus={dropdown.handleDropDownFocus}
                    toggleDropDown={dropdown.toggleDropDown}
                    showDropDown={dropdown.showDropDown}
                  />
                );
              } else {
                return <NavItem name={name} url={url} key={name} />;
              }
            })}
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
          {navbarLinks.map(({ name, url, dropdown }) => {
            if (dropdown) {
              return (
                <div key={name}>
                  <button
                    className="mobile-link flex items-center cursor-pointer focus:outline-none"
                    href={url}
                  >
                    {name}
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="w-4 h-4 ml-2"
                    />
                  </button>
                </div>
              );
            } else {
              return (
                <Link className="mobile-link" href={url} key={name}>
                  {name}
                </Link>
              );
            }
          })}
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
