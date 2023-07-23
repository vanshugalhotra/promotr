import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { toggle, close } from "@/slices/navbarSlice";

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
  url,
}) => {
  const router = useRouter();

  return (
    <li
      className="nav-item relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="bottom-line flex items-center justify-center cursor-pointer focus:outline-none"
        onClick={(event) => {
          toggleDropDown();
          router.push(url);
        }}
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
      url: "/services/services",
      dropdown: {
        links: [
          {
            name: "Traditional Marketing",
            url: "/services/traditionalmarketing",
          },
          {
            name: "Digital Marketing",
            url: "/services/digitalmarketing",
          },
          {
            name: "Graphic Designing",
            url: "/services/graphic_designing",
          },
          {
            name: "Web Development",
            url: "/services/web_development",
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
      url: "/services/eventmanagement",
    },
    {
      name: "About Us",
      url: "/",
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
        className="flex items-center justify-around border-b-[var(--color-grey-1)] z-[1000]"
      >
        <button
          className="menu-bar md:hidden text-2xl mx-6 z-20"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
        </button>
        <Link className="nav-logo z-[1000]" href={"/"}>
          <Image
            alt="Promotr"
            src={"/Assets/logo/promotr.png"}
            width={windowWidth > 768 ? 170 : 190}
            height={windowWidth > 768 ? 170 : 190}
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
                    url={url}
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
        } md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center transition-all duration-500 ease-in-out z-[10000]`}
      >
        <div className="flex flex-col md:flex-row md:mx-6">
          {navbarLinks.map(({ name, url, dropdown }) => {
            if (dropdown) {
              return (
                <div key={name}>
                  <Link
                    className="mobile-link flex items-center cursor-pointer focus:outline-none"
                    href={url}
                    onClick={() => {
                      dispatch(close());
                    }}
                  >
                    {name}
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="w-4 h-4 ml-2"
                      onClick={(event) => {
                        dropdown.toggleDropDown();
                        event.stopPropagation();
                        event.preventDefault();
                      }}
                    />
                  </Link>
                  <ul
                    className={`flex flex-col ${
                      dropdown.showDropDown ? "max-h-full mt-0" : "max-h-0 mt-2"
                    } overflow-y-auto transition-max-height duration-100 ease-in-out`}
                  >
                    {dropdown.links.map(({ name, url }) => {
                      return (
                        <Link
                          className="mobile-link px-6"
                          href={url}
                          key={name}
                          onClick={() => {
                            dispatch(close());
                          }}
                        >
                          {name}
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              );
            } else {
              return (
                <Link
                  className="mobile-link"
                  href={url}
                  key={name}
                  onClick={() => {
                    dispatch(close());
                  }}
                >
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
          <FontAwesomeIcon
            icon={faXmark}
            className="w-6 h-6 text-[var(--main-yellow)]"
          />
        </button>
      </div>
    </>
  );
};

export default Navbar;
