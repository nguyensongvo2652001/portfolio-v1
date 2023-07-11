import classes from "./Navbar.module.css";

const Navbar = (props) => {
  const { elements } = props;

  const scrollIntoView = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ul className={classes.navbar}>
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
  );
};

export default Navbar;
