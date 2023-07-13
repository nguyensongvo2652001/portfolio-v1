import classes from "./Contact.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import Reveal from "../Reveal/Reveal";
import ContentPadding from "../ContentPadding/ContentPadding";

const Contact = (props) => {
  const { elementRef } = props;

  return (
    <div className={classes.contact__container} ref={elementRef}>
      <ContentPadding>
        <SectionTitle title="Contact" />
        <Reveal>
          <p className={classes.contact__metaInfo}>
            Want to work with me ? Send me an email to{" "}
            <span>nguyensongvo2652001@gmail.com</span> !
          </p>
        </Reveal>

        <form className={classes.contact__form}>
          <div className={classes.contact__nameAndEmailInputs}>
            <div className={classes.contact__formControlGroup}>
              <label className={classes.contact__formLabel} htmlFor="name">
                Name
              </label>
              <input
                className={classes.contact__smallInput}
                type="text"
                id="name"
              />
            </div>

            <div className={classes.contact__formControlGroup}>
              <label className={classes.contact__formLabel} htmlFor="email">
                Email
              </label>
              <input
                className={classes.contact__smallInput}
                type="email"
                id="email"
              />
            </div>
          </div>

          <div className={classes.contact__formControlGroup}>
            <label className={classes.contact__formLabel} htmlFor="message">
              Message
            </label>
            <textarea
              className={classes.contact__input}
              type="text"
              id="message"
            />
          </div>

          <div className={classes.contact__formSubmitButtonContainer}>
            <button className={classes.contact__formSubmitButton}>
              Send the email !
            </button>
          </div>
        </form>
      </ContentPadding>
    </div>
  );
};

export default Contact;
