import classes from "./ContentPadding.module.css";

const ContentPadding = (props) => {
  return <div className={classes.contentPadding}>{props.children}</div>;
};

export default ContentPadding;
