import Backdrop from "../Backdrop/Backdrop";
import classes from "./InfoModal.module.css";

const InfoModal = (props) => {
  const { title, message, closeModal } = props;

  return (
    <Backdrop>
      <div className={classes.infoModal}>
        <div className={classes.infoModal__content}>
          <h1 className={classes.infoModal__title}>{title}</h1>
          <p className={classes.infoModal__message}>{message}</p>
        </div>

        <button
          className={classes.infoModal__dismissButton}
          onClick={closeModal}
        >
          Dismiss
        </button>
      </div>
    </Backdrop>
  );
};

export default InfoModal;
