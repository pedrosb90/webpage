// import Layout from "../comps/layout";
import StructureLay from "../comps/structureLay";
import React, { useState } from "react";
import Navbar from "../comps/navbar";
import styles from "../styles/form.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import { validName } from "../validations/validName";
import { validEmail } from "../validations/validEmail";
import { validMessage } from "../validations/validMessage";
import { StyleRegistry } from "styled-jsx";
import { useEffect } from "react";

function Contact_form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formDone, setFormDone] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (
      validName(name) === null &&
      validEmail(email) === null &&
      validMessage(message) === null
    ) {
      setFormDone(true);
    } else {
      setFormDone(false);
    }
  }, [name, email, message]);

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
    <StructureLay>
      <Navbar />{" "}
      <div className={styles.container}>
        <form
          noValidate
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
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label className={styles.errorMessage}>{validName(name)}</label>
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
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label className={styles.errorMessage}>{validEmail(email)}</label>
          </div>
          <div>
            <label className={styles.label} htmlFor="message">
              Message:
            </label>
            <textarea
              className={styles.text}
              id="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <label className={styles.errorMessage}>
              {validMessage(message)}
            </label>
          </div>
          <button
            disabled={!formDone}
            className={
              !formDone ? `${styles.button} ${styles.press}` : `${styles.ready}`
            }
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </StructureLay>
  );
}

export default Contact_form;
