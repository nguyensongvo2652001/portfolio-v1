import classes from "./SmallNavbarLogo.module.css";

const SmallNavbarLogo = (props) => {
  const allClasses = `${classes.smallNavbarLogo} ${props.className}`;

  return <div className={allClasses}>{props.children}</div>;
};

export default SmallNavbarLogo;
