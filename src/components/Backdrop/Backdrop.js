import { createPortal } from "react-dom";
import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  const allClasses = `${classes.backdrop} ${props.className}`;

  return createPortal(
    <div className={allClasses}>{props.children}</div>,
    document.getElementById("backdrop-root")
  );
};

export default Backdrop;
