import Layout from "../comps/layout";
import Navbar from "../comps/navbar";
import styles from "../styles/success.module.css";

function Contact_success() {
  return (
    <Layout>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.message}>
          Thank you for reaching out! I will get back to you immediately.
        </h1>
      </div>
    </Layout>
  );
}

export default Contact_success;
