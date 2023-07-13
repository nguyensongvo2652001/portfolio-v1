import classes from "./Footer.module.css";
import githublogo from "../../assets/githublogo.png";
import facebooklogo from "../../assets/facebooklogo.png";
import linkedinlogo from "../../assets/linkedinlogo.png";
import ContentPadding from "../ContentPadding/ContentPadding";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <ContentPadding>
        <h1 className={classes.footer__name}>Võ Song Nguyên </h1>
        <p className={classes.footer__email}>nguyensongvo2652001@gmail.com</p>
        <ul className={classes.footer__links}>
          <li className={classes.footer__linkContainer}>
            <a
              className={classes.footer__link}
              href="https://github.com/nguyensongvo2652001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githublogo} alt="Github's logo" />
            </a>
          </li>

          <li className={classes.footer__linkContainer}>
            <a
              className={classes.footer__link}
              href="https://www.linkedin.com/in/v%C3%B5-song-nguy%C3%AAn-703231213/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinlogo} alt="Linkedin's logo" />
            </a>
          </li>

          <li className={classes.footer__linkContainer}>
            <a
              className={classes.footer__link}
              href="https://www.facebook.com/vo.songnguyen.56"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebooklogo} alt="Facebook's logo" />
            </a>
          </li>
        </ul>

        <p className={classes.footer__copyrightNote}>
          No Copyright 2023 - Võ Song Nguyên
        </p>
        <p className={classes.footer__createdNote}>Created by Võ Song Nguyên</p>
      </ContentPadding>
    </footer>
  );
};

export default Footer;
