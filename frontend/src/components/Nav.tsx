import { GiHamburgerMenu } from "react-icons/gi";
import navStyle from "./Nav.module.css";
import { useState } from "react";
import classNames from "classnames";
import { ShowProjects } from "./ShowProjects";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const routes = [
    { label: "Projects", path: "/" },
    { label: "Contact", path: "/contact" },
  ];

  const handleOnMouseEnter = () => {
    setIsHovered(true);
  };

  const handleOnClickMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOnMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <nav className={navStyle.nav}>
      <div className={navStyle.mobile}>
        <a className={classNames(navStyle.a, navStyle.a_logo)} href="#">
          HowWeb
        </a>
        <GiHamburgerMenu
          className={navStyle.mobile_icon}
          onClick={handleOnClickMenu}
        />
      </div>
      <ul
        className={classNames(navStyle.nav_ul, {
          [navStyle.is_open]: isOpen,
        })}
      >
        {routes.map((route) => {
          if (route.label === "Projects") {
            return (
              <li
                className={navStyle.li}
                key={route.path}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
              >
                <a className={navStyle.a} href="#">
                  {route.label}
                </a>
              </li>
            );
          } else {
            return (
              <li className={navStyle.li} key={route.path}>
                <a className={navStyle.a} href="#">
                  {route.label}
                </a>
              </li>
            );
          }
        })}
      </ul>
      {isHovered && <ShowProjects />}
    </nav>
  );
};
