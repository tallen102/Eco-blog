import React, { useRef } from "react";
import { FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        "template_7xyhwen",
        form.current,
        "user_hKs2aRfLoozcqA28UpUyz"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully");
        },
        (error) => {
          toast.error(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" placeholder="Full Name" required />
        <label>Email</label>
        <input type="email" name="user_email" placeholder="Your active email" required />
        <label>Subject</label>
        <input type="text" name="subject" placeholder="Subject" required />
        <label>Message</label>
        <textarea name="message" cols="30" rows="10"></textarea>
        <button className="--btn --btn-primary">Send Message</button>
    </form>
  );
};

export default ContactForm;
