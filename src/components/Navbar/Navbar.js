import { useState } from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Navbar.module.css";
import SmallNavbar from "./SmallNavbar/SmallNavbar";
import SmallNavbarLogo from "../SmallNavbarLogo/SmallNavbarLogo";

const Navbar = (props) => {
  const [showSmallNavbar, setShowSmallNavbar] = useState(false);

  const smallNavbarIconClickHandler = () => {
    setShowSmallNavbar(true);
  };

  const closeNavbar = () => {
    setShowSmallNavbar(false);
  };

  const { elements } = props;

  const scrollIntoView = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={classes.navbar__container}>
      <SmallNavbarLogo className={classes.navbar__smallNavIconContainer}>
        <ion-icon
          name="menu-outline"
          onClick={smallNavbarIconClickHandler}
        ></ion-icon>
      </SmallNavbarLogo>
      {showSmallNavbar && (
        <SmallNavbar
          closeNavbar={closeNavbar}
          elements={elements}
          scrollIntoView={scrollIntoView}
        />
      )}
      <ul className={classes.navbar__elements}>
        {elements.map((element, index) => {
          return (
            <li className={classes.navbar__element} key={index}>
              <button
                className={classes.navbar__link}
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
    </div>
  );
};

export default Navbar;
