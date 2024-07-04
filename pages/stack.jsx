import Layout from "../comps/layout";
import Navbar from "../comps/navbar";
import Image from "next/image";
import styles from "../styles/stack.module.css";
import dipI from "../public/HenryFull.png";
import dipII from "../public/HenryTA.jpg";

function Stack() {
  return (
    <Layout>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Tech Skills & Design Platforms</h1>
        <div className={styles.listContainer}>
          <Image
            className={styles.imageContainer}
            src={dipI}
            height={190}
            width={270}
            display="responsive"
          />
          <ul className={styles.skillsList}>
            <li>Javascript</li>
            <li>React/Next.js</li>
            <li>React-Native (iOS - Android)</li>
            <li>Webflow</li>
            <li>Wordpress</li>
            <li>Shopify</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Node</li>
            <li>Redux</li>
            <li>SQL</li>
            <li>Vercel</li>
            <li>Figma</li>
            <li>Adobe Photoshop & Lightroom</li>
          </ul>
        </div>
        <h1 className={styles.title}>Soft Skills</h1>
        <div className={styles.listContainer}>
          <Image
            className={styles.imageContainer}
            src={dipII}
            height={190}
            width={270}
            display="responsive"
          />
          <ul className={styles.skillsList}>
            <li>Product Management</li>
            <li>Communication</li>
            <li>Leadership</li>
            <li>Problem Solving</li>
            <li>Team Work</li>
            <li>Conflict resolution</li>
            <li>Teaching Skills</li>
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
    </Layout>
  );
}

export default Stack;
