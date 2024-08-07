// import Layout from "../comps/layout";
import StructureLay from "../comps/structureLay";
import Navbar from "../comps/navbar";
import styles from "../styles/contact_redirect.module.css";

function Contact_error() {
  return (
    <StructureLay>
      <Navbar />
      <div className={styles.containerError}>
        <h1 className={styles.message}>
          Oops! Something went wrong. Please try again later or contact me
          directly on LinkedIn.
        </h1>
      </div>
    </StructureLay>
  );
}

export default Contact_error;
