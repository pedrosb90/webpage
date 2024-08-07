// import Layout from "../comps/layout";
import StructureLay from "../comps/structureLay";
import Navbar from "../comps/navbar";
import styles from "../styles/contact_redirect.module.css";

function Contact_success() {
  return (
    <StructureLay>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.message}>
          Thank you! Your message has been submitted.
        </h1>
      </div>
    </StructureLay>
  );
}

export default Contact_success;
