import Layout from "../comps/layout";
import React, { useState } from "react";
import Navbar from "../comps/navbar";
import styles from "../styles/form.module.css";
import { useRouter } from "next/router";
import axios from "axios";

function Contact_form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await axios.post(
        "https://formspree.io/f/xqkvkqod",
        formData
      );
      if (response.status >= 200 && response.status < 300) {
        router.push("/contact_success");
        console.log("Submission successful");
      } else {
        router.push("/contact_error");
      }
    } catch (error) {
      console.error("- Error during submitting -", error);
    }
  };

  return (
    <Layout>
      <Navbar />{" "}
      <div className={styles.container}>
        <form
          onSubmit={handleFormSubmit}
          action="https://formspree.io/f/xqkvkqod"
          method="POST"
        >
          <div>
            <label className={styles.label} htmlFor="name">
              Name:
            </label>
            <input
              className={styles.input}
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className={styles.label} htmlFor="email">
              Email:
            </label>
            <input
              className={styles.input}
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className={styles.label} htmlFor="message">
              Message:
            </label>
            <textarea
              className={styles.text}
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button className={`${styles.button} ${styles.press}`} type="submit">
            Send
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default Contact_form;
