import Backdrop from "../../Backdrop/Backdrop";
import classes from "./SmallNavbar.module.css";

const SmallNavbar = (props) => {
  const { elements, scrollIntoView } = props;

  return (
    <Backdrop className={classes.smallNavbar}>
      <ion-icon name="close-outline" onClick={props.closeNavbar}></ion-icon>
      <ul className={classes.smallNavbar__elements}>
        {elements.map((element, index) => {
          return (
            <li className={classes.smallNavbar__element} key={index}>
              <button
                className={classes.smallNavbar__link}
                onClick={() => {
                  scrollIntoView(element.elementRef);
                }}
              >
                {element.text}
              </button>
            </li>
          );
        })}
      </ul>
    </Backdrop>
  );
};

export default SmallNavbar;
