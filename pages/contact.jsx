import SocialPanels from "@/components/SocialPanels";
import styles from "../styles/Contact.module.css";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    const res = await fetch("https://stportoflio.vercel.app/api/contact", {
      method: "POST",
      body: JSON.stringify({ name, email, subject, message }),
    });
    // Success if status code is 201
    if (res.status === 201) {
      toast("Thank you for contacting us!", { type: "success" });
    } else {
      toast("Please re-check your inputs.", { type: "error" });
    }
  };

  return (
    <div>
      <h1 className={styles.page__title}>Contact</h1>
      <hr></hr>
      <div className={styles.contact__container}>
        <div>
          <h3>Reach out via socials</h3>
          <SocialPanels />
        </div>
        <div>
          <h3>Or fill out this form</h3>
          <ToastContainer />
          <form className={styles.contact__form} onSubmit={submitForm}>
            <div className={styles.flex__row}>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export async function getStaticProps() {
  return {
    props: { title: "Contact" },
  };
}

export default ContactPage;
