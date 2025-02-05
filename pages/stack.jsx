// import Layout from "../comps/layout";
import StructureLay from "../comps/structureLay";
import Navbar from "../comps/navbar";
import Image from "next/image";
import styles from "../styles/stack.module.css";
import dipI from "../public/HenryFull.png";
import dipII from "../public/HenryTA.jpg";
import dipIII from "../public/pmCoderHouse.png";

function Stack() {
  return (
    <StructureLay>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Certifications</h1>
        <div className={styles.listContainer}>
          <Image
            className={styles.imageContainer}
            src={dipI}
            height={190}
            width={270}
            display="responsive"
          />
          <ul className={styles.skillsList}>
            <li>React/Next.js</li>
            <li>React-Native (iOS - Android)</li>
            <li>Webflow</li>
            <li>Shopify</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Node</li>
            <li>Redux</li>
            <li>SQL</li>
            <li>MongoDb</li>
          </ul>
        </div>
        <div className={styles.listContainer}>
          <Image
            className={styles.imageContainer}
            src={dipII}
            height={190}
            width={270}
            display="responsive"
          />

          <ul className={styles.skillsList}>
            <li>Communication</li>
            <li>Leadership</li>
            <li>Problem Solving</li>
            <li>Team Work</li>
            <li>Conflict resolution</li>
            <li>Teaching Skills</li>
          </ul>
        </div>
        <div className={styles.listContainer}>
          <Image
            className={styles.imageContainer}
            src={dipIII}
            height={190}
            width={270}
            display="responsive"
          />
          <ul className={styles.skillsList}>
            <li>Product Management</li>
          </ul>
        </div>

        {/* <h1 className={styles.title}>Other</h1>
        <div className={styles.listContainerOther}>
          <ul className={styles.skillsList}>
            <li>Time efficient</li>
            <li>Tri Lingual</li>
          </ul>
        </div> */}
      </div>
    </StructureLay>
  );
}

export default Stack;
