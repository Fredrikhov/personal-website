import footerStyle from "./Footer.module.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <p className={footerStyle.p}>{currentYear} © HovWeb</p>;
};
