import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = (props) => {
  const allClasses = `${classes.loadingSpinner} ${props.className}`;

  return <div className={allClasses}></div>;
};

export default LoadingSpinner;
