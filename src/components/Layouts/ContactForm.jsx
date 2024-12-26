import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_ccid698", // Service ID
        "template_qml5dg9", // Template ID
        formRef.current,
        "cZC6HUxRjsMFR5npe" // Public Key
      )
      .then(
        (result) => {
          setIsSubmitting(false);
          setSuccessMessage("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          setIsSubmitting(false);
          setSuccessMessage("Failed to send message. Please try again.");
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <div
      className="w-full mt-20 flex flex-col justify-between gap-12"
      id="contact"
    >
      <div className="w-10/12 h-full lg:w-4/6 mx-auto flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full">
          <p className="text-2xl">Contact Me</p>
          <hr className="w-10 h-0.5 mt-1" />
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 w-full"
        >
          <div className="flex gap-4 flex-col lg:flex-row">
            <span className="flex flex-col gap-4">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="py-2 px-4 bg-tet rounded-sm outline-none text-primary"
              />
            </span>
            <span className="flex flex-col gap-4">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                required
                className="py-2 px-4 bg-tet rounded-sm outline-none text-primary"
              />
            </span>
          </div>
          <span className="flex flex-col gap-4">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message"
              required
              className="py-2 px-4 bg-tet rounded-sm outline-none text-primary"
            />
          </span>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`text-nowrap px-8 py-2 font-medium text-primary  ${
              isSubmitting ? "bg-gray-500" : "bg-sec"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      {successMessage && (
        <div className="w-10/12 lg:w-4/6 mx-auto text-center text-green-500 mt-4">
          {successMessage}
        </div>
      )}
      <div className="w-full bg-foot h-12 py-4 self-end flex items-center justify-center">
        <p className="text-xs">
          Designed by HIGH-ER ENTERPRISES: raniem57@gmail.com
        </p>
      </div>
    </div>
  );
};
