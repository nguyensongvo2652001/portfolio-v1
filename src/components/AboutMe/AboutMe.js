import classes from "./AboutMe.module.css";
import laptopimage from "../../assets/laptopImage.png";

const AboutMe = (props) => {
  return (
    <div className={classes.aboutMe__container} ref={props.elementRef}>
      <h1 className={classes.aboutMe__title}>About Me</h1>
      <div className={classes.aboutMe__content}>
        <div className={classes.aboutMe__textbox}>
          <p>
            I'm a full-stack web developer passionate about machine learning,
            creating seamless user experiences through code. With expertise in
            HTML, CSS, JavaScript, Python and many more, I bring versatility to
            projects. Beyond coding, I enjoy Teamfight Tactics, the gym, and
            exploring culinary adventures. Let's collaborate and bring your
            ideas to life!
          </p>
        </div>

        <div className={classes.aboutMe__imageContainer}>
          <img src={laptopimage} alt="somebody's hands using laptop" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
