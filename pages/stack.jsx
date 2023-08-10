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
            height={190}
            width={270}
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
            <li>Vercel</li>
            <li>Figma</li>
            <li>Adobe Photoshop & Lightroom</li>
            <li>SEO Tools</li>
            <li>Strong client-based focus</li>
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
