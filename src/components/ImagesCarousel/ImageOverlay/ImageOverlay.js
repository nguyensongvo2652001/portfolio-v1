import Backdrop from "../../Backdrop/Backdrop";
import classes from "./ImageOverlay.module.css";

const ImageOverlay = (props) => {
  const { image, closeModal } = props;

  return (
    <Backdrop closeModal={closeModal}>
      <div className={classes.imageOverlay__imageContainer}>
        <img className={classes.imageOverlay__image} alt="" src={image} />
      </div>
    </Backdrop>
  );
};

export default ImageOverlay;
