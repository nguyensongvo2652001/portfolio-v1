import classes from "./Hero.module.css";

import githublogo from "../../assets/githublogo.png";
import facebooklogo from "../../assets/facebooklogo.png";
import linkedinlogo from "../../assets/linkedinlogo.png";

const Hero = (props) => {
  const { elementRef, aboutMeRef } = props;

  const scrollToAboutMeSection = () => {
    aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={classes.hero__container} ref={elementRef}>
      <div className={classes.hero__textBox}>
        <h1 className={classes.hero__mainInfo}>I’m Võ Song Nguyên.</h1>
        <h1 className={classes.hero__mainInfo}>A fullstack web developer</h1>
        <h1 className={classes.hero__subInfo}>based in Vietnam.</h1>
      </div>

      <p className={classes.hero__intro}>
        Passionate and skilled full-stack web developer dedicated to creating
        exceptional digital experiences.
      </p>

      <ul className={classes.hero__links}>
        <li className={classes.hero__linkContainer}>
          <a
            className={classes.hero__link}
            href="https://github.com/nguyensongvo2652001"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githublogo} alt="Github's logo" />
          </a>
        </li>

        <li className={classes.hero__linkContainer}>
          <a
            className={classes.hero__link}
            href="https://www.linkedin.com/in/v%C3%B5-song-nguy%C3%AAn-703231213/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinlogo} alt="Linkedin's logo" />
          </a>
        </li>

        <li className={classes.hero__linkContainer}>
          <a
            className={classes.hero__link}
            href="https://www.facebook.com/vo.songnguyen.56"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebooklogo} alt="Facebook's logo" />
          </a>
        </li>
      </ul>

      <ul className={classes.hero__buttons}>
        <li className={classes.hero__buttonContainer}>
          <button
            className={`${classes.hero__mainButton} ${classes.hero__button}`}
            onClick={scrollToAboutMeSection}
          >
            More about me
          </button>
        </li>

        <li className={classes.hero__buttonContainer}>
          <div className={classes.hero__secondaryButtonContainer}>
            <a
              className={`${classes.hero__secondaryButton} ${classes.hero__button}`}
              href={linkedinlogo}
              download
            >
              Download my resume
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Hero;
