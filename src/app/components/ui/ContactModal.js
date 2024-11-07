import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import Button from "./Button";
import { motion } from "framer-motion";
import ResultModal from "./ResultModal";
import Loader from "./Loader";
import emailjs from "@emailjs/browser";
import { Close } from "@mui/icons-material";

const formFields = [
  {
    id: "name",
    placehoder: "John Doe",
    errorMsg: "Maximum characters: 64.",
    label: "Name",
    type: "text",
  },
  {
    id: "email",
    placehoder: "email@email.com",
    errorMsg: "Enter a valid email address.",
    label: "Email",
    type: "email",
  },
  {
    id: "message",
    placehoder: "Please write your message here...",
    errorMsg: "Maximum characters: 500.",
    label: "Message",
    type: "textarea",
  },
];

const checkIfEmailValid = (input) => {
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return input.toLowerCase().match(emailRegex);
};

const checkIfLengthIsValid = (input, maxLength) => {
  return input.length < maxLength && input.length > 0;
};

const checkIfFormIsValid = (key, input) => {
  switch (key) {
    case "name":
      return checkIfLengthIsValid(input, 64);
    case "message":
      return checkIfLengthIsValid(input, 512);
    case "email":
      return checkIfEmailValid(input);
    default:
      return true;
  }
};

const ContactModal = ({ handleCloseModal, publicKey }) => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isError, setIsError] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [isResponse, setIsResponse] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const checkInput = (e) => {
    const inputId = e.target.id;

    setIsError({
      ...isError,
      [inputId]: !checkIfFormIsValid(inputId, contactForm[inputId]),
    });
  };

  const handleSubmit = async () => {
    let isFormValid = true;
    let errors = isError;
    Object.keys(contactForm).map((key) => {
      const isInputValid = checkIfFormIsValid(key, contactForm[key]);
      errors = {
        ...errors,
        [key]: !checkIfFormIsValid(key, contactForm[key]),
      };

      if (!isInputValid) isFormValid = false;
    });

    setIsError(errors);

    if (isFormValid) {
      setIsSubmitted(true);

      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_KEY,
          process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_KEY,
          {
            name: contactForm.name,
            to_name: "William",
            email: contactForm.email,
            to_email: "william.farre@gmail.com",
            message: contactForm.message,
          },
          process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY,
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setIsSuccess(true);
            setIsWaiting(false);
            setIsSubmitted(false);
            setIsResponse(true);
          },
          (error) => {
            console.log("FAILED...", error);
            setIsSuccess(false);
            setIsWaiting(false);
            setIsSubmitted(false);
            setIsResponse(true);
          },
        );
    }
  };

  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-slate-950/40">
      <div className="absolute h-full w-full" onClick={handleCloseModal}></div>
      {!isResponse && (
        <motion.aside
          animate={
            isSubmitted && {
              scale: [1, 2, 1, 0.5, 0.25, 0],
              rotate: [0, 180, 270, 360, 720, 0],
              borderRadius: ["10%", "20%", "25%", "50%", "50%", "50%"],
            }
          }
          transition={{ ease: "linear", duration: 1.2 }}
          onAnimationComplete={() =>
            isSubmitted && !isResponse && setIsWaiting(true)
          }
          className={`relative rounded-3xl bg-white px-6 py-4`}
        >
          {!isWaiting && !isResponse && (
            <motion.div className={`transition-all duration-700`}>
              <button className="float-end" onClick={handleCloseModal}>
                <Close className="text-2xl text-black transition-all duration-300 hover:text-teal-500 sm:text-4xl" />
              </button>
              <SectionHeader headerTitle={"Contact"} />
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex h-[80vh] max-h-[400px] w-[80vw] max-w-[600px] flex-col items-center gap-4 sm:w-[90vw] sm:min-w-80"
              >
                {formFields.map((field, index) => {
                  return (
                    <label
                      htmlFor={field.id}
                      key={"formfield" + index}
                      className="relative flex w-full flex-col"
                    >
                      <span className="">{field.label}</span>
                      {field.type === "textarea" ? (
                        <textarea
                          id={field.id}
                          name={field.id}
                          className={`h-40 resize-none rounded-xl bg-slate-950/10 px-2 py-1 focus:outline-teal-500 ${isError[field.id] && "border-2 border-solid border-red-500"}`}
                          value={contactForm[field.id]}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              [field.id]: e.target.value,
                            })
                          }
                          onBlur={checkInput}
                        />
                      ) : (
                        <input
                          id={field.id}
                          name={field.id}
                          className={`rounded-xl bg-slate-950/10 px-2 py-1 focus:outline-teal-500 ${isError[field.id] && "border-2 border-solid border-red-500"}`}
                          value={contactForm[field.id]}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              [field.id]: e.target.value,
                            })
                          }
                          onBlur={checkInput}
                        />
                      )}
                      {isError[field.id] && (
                        <span className="absolute bottom-0 right-1 text-right text-xs text-red-500">
                          {field.errorMsg}
                        </span>
                      )}
                      {field.id === "message" && (
                        <span className="absolute right-0 top-0 text-right text-sm">
                          {contactForm[field.id].length}/500
                        </span>
                      )}
                    </label>
                  );
                })}
                <div className="sm:self-end">
                  <Button text={"Send"} handleClick={handleSubmit} />
                </div>
              </form>
            </motion.div>
          )}
        </motion.aside>
      )}

      {isWaiting && (
        <Loader
          isLoading={!isResponse}
          onAnimationComplete={() => {
            isResponse && setIsWaiting(false);
          }}
        />
      )}

      {isResponse && !isWaiting && (
        <ResultModal
          isSuccess={isSuccess}
          handleClick={handleCloseModal}
        ></ResultModal>
      )}
    </div>
  );
};

export default ContactModal;
