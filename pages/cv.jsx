import { useState } from "react";
import Image from "next/legacy/image";
import myCv1 from "../public/Pedro Strauch Dark Mode/1cv.jpeg";
import myCv2 from "../public/Pedro Strauch Dark Mode/2cv.jpeg";
import Navbar from "../comps/navbar";
import Layout from "../comps/layout";
import styles from "../styles/cv.module.css";

function Cv() {
  const [showPage, setShowPage] = useState(true);

  const handleToggle = () => {
    setShowPage(!showPage);
  };
  return (
    <Layout>
      <Navbar />
      <div>
        {" "}
        <button
          className={`${styles.toggButt} ${styles.press}`}
          onClick={handleToggle}
        >
          {showPage ? "View Past Experience" : "View Main"}
        </button>
      </div>

      <div className={styles.imageContainer}>
        {showPage ? (
          <Image
            src={myCv1}
            width={560}
            height={780}
            alt="CV Page 1"
            className={styles.cvImage}
          />
        ) : (
          <Image
            src={myCv2}
            width={560}
            height={780}
            alt="CV Page 2"
            className={styles.cvImage}
          />
        )}
      </div>
    </Layout>
  );
}

export default Cv;
