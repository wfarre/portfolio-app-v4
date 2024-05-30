import React, { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Button from "../Button/Button";
import { animate, motion } from "framer-motion";

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

const ContactModal = () => {
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
  }, [contactForm]);

  useEffect(() => {
    setTimeout(() => {
      setIsWaiting(false);
      // setIsSubmitted(false);
      setIsResponse(true);
    }, 5000);
  }, [isWaiting]);

  return (
    <div className="fixed bg-slate-950/40 w-full h-full left-0 top-0 z-50 flex items-center justify-center">
      <motion.aside
        animate={
          isSubmitted &&
          (!isResponse
            ? {
                scale: [1, 1.5, 2, 0.5, 0.01, 0, 0.3],
                rotate: [0, 180, 270, 270, 0, 0],
                borderRadius: ["10%", "20%", "50%", "50%", "50%", "50%"],
              }
            : {
                scale: [0.3, 0.01, 1.5, 1.2, 1],
                borderRadius: ["50%", "50%", "25%", "15%", "24px"],
              })
        }
        transition={{ duration: 1.5 }}
        onAnimationComplete={() =>
          isSubmitted && !isResponse && setIsWaiting(true)
        }
        className={`relative ${
          isWaiting
            ? "bg-transparent h-[80vh] w-[90vw] max-w-[600px] max-h-[600px] min-w-80"
            : "bg-white"
        }  rounded-3xl py-4 px-6 `}
      >
        {isWaiting && (
          <div className="absolute border-white border-[50px] border-t-teal-500 rounded-[50%] h-full w-full top-0 left-0  animate-rotation"></div>
        )}

        {/* {response.isSuccessful && <p>Thank you for your message</p>}
        {response.error && <p>Ooops! Something went wrong!</p>} */}

        {isResponse && (
          <>
            <div className="flex flex-col items-center gap-5 px-4 py-5 h-50 w-50">
              <p className="text-xl">Thank you for your message!</p>
              <div>
                <Button text={"OK"}></Button>
              </div>
            </div>
          </>
        )}

        {!isWaiting && !isResponse && (
          <div
            className={`${
              isSubmitted && "opacity-0"
            } transition-all duration-700`}
          >
            <SectionHeader headerTitle={"Contact"} />
            <form className="flex flex-col gap-4 items-center h-[80vh] w-[90vw] max-w-[600px] max-h-[600px] min-w-80">
              {formFields.map((field, index) => {
                return (
                  <label
                    htmlFor={field.id}
                    key={"formfield" + index}
                    className="flex flex-col w-full"
                  >
                    <span className="">{field.label}</span>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.id}
                        name={field.id}
                        className="bg-slate-950/10 rounded-xl px-2 py-1 h-40 focus:outline-teal-500 resize-none"
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
                        className="bg-slate-950/10 rounded-xl px-2 py-1 focus:outline-teal-500"
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
                <button type="button" onClick={() => setIsSubmitted(true)}>
                  Send
                </button>
                {/* <Button text={"Send"} onClick={} /> */}
              </div>
            </form>
          </div>
        )}
      </motion.aside>
    </div>
  );
};

export default ContactModal;
