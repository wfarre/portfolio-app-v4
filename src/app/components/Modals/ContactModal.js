import React, { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Button from "../Button/Button";
import { animate, motion } from "framer-motion";
import ResultModal from "./ResultModal";
import Loader from "../Loader/Loader";

const formFields = [
  {
    id: "name",
    placehoder: "John Doe",
    label: "Name",
    type: "text",
  },
  {
    id: "email",
    placehoder: "email@email.com",
    label: "Email",
    type: "email",
  },
  {
    id: "message",
    placehoder: "Please write your message here...",
    label: "Message",
    type: "textarea",
  },
];

const ContactModal = ({ handleCloseModal }) => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isWaiting, setIsWaiting] = useState(false);
  const [isResponse, setIsResponse] = useState(false);

  useEffect(() => {
    console.log(contactForm);
    console.log(isSubmitted);
    console.log(isWaiting);

    console.log("response");
    console.log(isResponse);
  }, [contactForm, isSubmitted, isWaiting, isResponse]);

  useEffect(() => {
    isSubmitted &&
      isWaiting &&
      setTimeout(() => {
        setIsResponse(true);
      }, 5000);
  }, [isWaiting, isSubmitted]);

  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-slate-950/40">
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
              <SectionHeader headerTitle={"Contact"} />
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex h-[80vh] max-h-[600px] w-[90vw] min-w-80 max-w-[600px] flex-col items-center gap-4"
              >
                {formFields.map((field, index) => {
                  return (
                    <label
                      htmlFor={field.id}
                      key={"formfield" + index}
                      className="flex w-full flex-col"
                    >
                      <span className="">{field.label}</span>
                      {field.type === "textarea" ? (
                        <textarea
                          id={field.id}
                          name={field.id}
                          className="h-40 resize-none rounded-xl bg-slate-950/10 px-2 py-1 focus:outline-teal-500"
                          value={contactForm[field.id]}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              [field.id]: e.target.value,
                            })
                          }
                        />
                      ) : (
                        <input
                          htmlFor={field.id}
                          name={field.id}
                          className="rounded-xl bg-slate-950/10 px-2 py-1 focus:outline-teal-500"
                          value={contactForm[field.id]}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              [field.id]: e.target.value,
                            })
                          }
                        />
                      )}
                    </label>
                  );
                })}
                <div className="sm:self-end">
                  <Button
                    text={"Send"}
                    handleClick={() => setIsSubmitted(true)}
                  />
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
        <ResultModal handleClick={handleCloseModal}></ResultModal>
      )}
    </div>
  );
};

export default ContactModal;
