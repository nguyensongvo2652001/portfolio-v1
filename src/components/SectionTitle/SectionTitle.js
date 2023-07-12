import Reveal from "../Reveal/Reveal";
import classes from "./SectionTitle.module.css";

const SectionTitle = (props) => {
  return (
    <h1 className={classes.sectionTitle}>
      <Reveal>{props.title} </Reveal>
    </h1>
  );
};

export default SectionTitle;
