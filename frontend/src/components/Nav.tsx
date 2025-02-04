import navStyle from "./Nav.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import classNames from "classnames";
import { ShowProjects } from "./ShowProjects";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const routes = [
    {
      label: "Projects",
      href: "https://github.com/Fredrikhov?tab=repositories",
    },
    {
      label: "Contact",
      href: "mailto:fredrik@hovweb.org",
    },
  ];

  const handleOnMouseEnter = () => {
    /**
     * Find the minimum value between the device's screen width and the width of the browser window's viewport
     */
    if (Math.min(screen.width, window.innerWidth) > 590) {
      setIsHovered(true);
    }
  };

  const handleOnClickMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className={navStyle.nav}>
      <div className={navStyle.mobile}>
        <a className={classNames(navStyle.a, navStyle.a_logo)} href="#">
          HovWeb
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
        {routes.map((route, index) => {
          if (route.label === "Projects") {
            return (
              <li
                className={navStyle.li}
                key={index}
                id={route.label}
                onMouseEnter={handleOnMouseEnter}
              >
                <a className={navStyle.a} href={route.href}>
                  {route.label}
                </a>
              </li>
            );
          } else {
            return (
              <li className={navStyle.li} key={index}>
                <a className={navStyle.a} href={route.href}>
                  {route.label}
                </a>
              </li>
            );
          }
        })}
      </ul>
      {isHovered && <ShowProjects props={setIsHovered} />}
    </nav>
  );
};
