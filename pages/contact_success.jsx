import Layout from "../comps/layout";
import Navbar from "../comps/navbar";
import styles from "../styles/success.module.css";

function Contact_success() {
  return (
    <Layout>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.message}>
          Thank you! Your message has been submitted.
        </h1>
      </div>
    </Layout>
  );
}

export default Contact_success;
