import footerStyle from "./Footer.module.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={footerStyle.footer}>
      <ul className={footerStyle.ul}>
        <li className={footerStyle.li}>
          <a
            className={footerStyle.a}
            target="_blank"
            href="https://github.com/Fredrikhov"
          >
            <FaGithub />
          </a>
        </li>
        <li className={footerStyle.li}>
          <a
            className={footerStyle.a}
            target="_blank"
            href="https://www.linkedin.com/in/fredrik-hov-nilsen-5a271414a/"
          >
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
      <p className={footerStyle.p}>{currentYear} © HovWeb</p>
    </footer>
  );
};
