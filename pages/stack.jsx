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
        <h1 className={styles.title}>Tech & Design Skills</h1>
        <div className={styles.listContainer}>
          <Image
            className={styles.imageContainer}
            src={dipI}
            height={200}
            width={280}
            display="responsive"
          />
          <ul className={styles.skillsList}>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Node</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Redux</li>
            <li>SQL</li>
            <li>Figma</li>
            <li>Adobe Photoshop & Lightroom</li>
          </ul>
        </div>
        <h1 className={styles.title}>Soft Skills</h1>
        <div className={styles.listContainer}>
          <Image
            className={styles.imageContainer}
            src={dipII}
            height={200}
            width={280}
            display="responsive"
          />
          <ul className={styles.skillsList}>
            <li>Communication</li>
            <li>Leadership</li>
            <li>Problem Solving</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Stack;
