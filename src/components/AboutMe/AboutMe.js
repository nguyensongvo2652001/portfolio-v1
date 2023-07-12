import classes from "./AboutMe.module.css";
import laptopimage from "../../assets/laptopImage.png";
import Reveal from "../Reveal/Reveal";
import SectionTitle from "../SectionTitle/SectionTitle";
import ContentPadding from "../ContentPadding/ContentPadding";

const AboutMe = (props) => {
  const containerClasses = `${classes.aboutMe__container} ${props.className}`;

  return (
    <div className={containerClasses} ref={props.elementRef}>
      <ContentPadding>
        <SectionTitle title="About Me" />
      </ContentPadding>

      <div className={classes.aboutMe__content}>
        <div className={classes.aboutMe__textbox}>
          <Reveal>
            <ContentPadding>
              <p>
                I'm a full-stack web developer passionate about machine
                learning, creating seamless user experiences through code. With
                expertise in HTML, CSS, JavaScript, Python and many more, I
                bring versatility to projects. Beyond coding, I enjoy Teamfight
                Tactics, the gym, and exploring culinary adventures. Let's
                collaborate and bring your ideas to life!
              </p>
            </ContentPadding>
          </Reveal>
        </div>

        <div className={classes.aboutMe__imageContainer}>
          <img src={laptopimage} alt="somebody's hands using laptop" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
