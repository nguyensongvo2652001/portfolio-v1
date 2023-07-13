import classes from "./Contact.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import Reveal from "../Reveal/Reveal";
import ContentPadding from "../ContentPadding/ContentPadding";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import InfoModal from "../InfoModal/InfoModal";

const Contact = (props) => {
  const EMAIL_JS_SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
  const EMAIL_JS_TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
  const EMAIL_JS_PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;

  const { elementRef } = props;

  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [infoModalInfo, setInfoModalInfo] = useState({
    message:
      "Your email has been sent. I will try to contact you back as soon as possible",
    title: "Send email successfully !",
  });
  const closeInfoModal = () => {
    setShowInfoModal(false);
  };

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const sendEmail = async (event) => {
    event.preventDefault();

    const templateParams = {
      input_name: nameRef.current.value,
      input_email: emailRef.current.value,
      input_message: messageRef.current.value,
    };

    if (
      templateParams.input_name === "" ||
      templateParams.input_email === "" ||
      templateParams.input_message === ""
    ) {
      return;
    }

    try {
      setIsSendingEmail(true);
      await emailjs.send(
        EMAIL_JS_SERVICE_ID,
        EMAIL_JS_TEMPLATE_ID,
        templateParams,
        EMAIL_JS_PUBLIC_KEY
      );
      setInfoModalInfo({
        message:
          "Your email has been sent. I will try to contact you back as soon as possible",
        title: "Send email successfully !",
      });
    } catch (err) {
      setInfoModalInfo({
        message:
          "Something went wrong trying to send your email. You can try again or just send an email directly to nguyensongvo2652001@gmail.com",
        title: "Send email failed !",
      });
    }
    setShowInfoModal(true);
    setIsSendingEmail(false);
  };

  return (
    <div className={classes.contact__container} ref={elementRef}>
      {showInfoModal && (
        <InfoModal {...infoModalInfo} closeModal={closeInfoModal} />
      )}
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
              <Reveal>
                <label className={classes.contact__formLabel} htmlFor="name">
                  Name
                </label>
              </Reveal>
              <Reveal width="100%">
                <input
                  className={classes.contact__smallInput}
                  type="text"
                  id="name"
                  ref={nameRef}
                  required
                />
              </Reveal>
            </div>

            <div className={classes.contact__formControlGroup}>
              <Reveal>
                <label className={classes.contact__formLabel} htmlFor="email">
                  Email
                </label>
              </Reveal>
              <Reveal width="100%">
                <input
                  className={classes.contact__smallInput}
                  type="email"
                  id="email"
                  ref={emailRef}
                  required
                />
              </Reveal>
            </div>
          </div>

          <div className={classes.contact__formControlGroup}>
            <Reveal>
              <label className={classes.contact__formLabel} htmlFor="message">
                Message
              </label>
            </Reveal>
            <Reveal width="100%">
              <textarea
                className={classes.contact__input}
                type="text"
                id="message"
                ref={messageRef}
                required
              />
            </Reveal>
          </div>

          <div className={classes.contact__formSubmitButtonContainer}>
            {isSendingEmail && <LoadingSpinner />}
            {!isSendingEmail && (
              <Reveal>
                <button
                  className={classes.contact__formSubmitButton}
                  onClick={sendEmail}
                >
                  Send the email !
                </button>
              </Reveal>
            )}
          </div>
        </form>
      </ContentPadding>
    </div>
  );
};

export default Contact;
