// import Layout from "../comps/layout";
import Head from "next/head";
import StructureLay from "../comps/structureLay";
import Navbar from "../comps/navbar";
import Image from "next/image";
import styles from "../styles/stack.module.css";
import dipI from "../public/HenryFull.png";
import dipII from "../public/HenryTA.jpg";
import dipIII from "../public/pmCoderHouse.png";
import reactimg from "../public/Reactlogo.png";
import shopi from "../public/shopilogo.png";
import webflow from "../public/webflow.png";

function Stack() {
  return (
    <StructureLay>
      <html lang="en">
        <Head>
          <title>Skills & Certifications – Pedro Strauch</title>
          <meta
            name="description"
            content="Explore Pedro Strauch's skill stack and certifications in web development, communication, and product management. Discover tools like React, Webflow, Shopify, and more."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://pedrostrauch.com/stack" />
          <meta property="og:image" content="/pstudio.jpeg" />
          <meta name="robots" content="index, follow" />
        </Head>
      </html>
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
            <li>
              React
              <Image
                src={reactimg}
                alt="React"
                height={25}
                width={80}
                className={styles.icon}
              />
            </li>
            <li>
              Shopify
              <Image
                src={shopi}
                alt="Shopify"
                height={25}
                width={80}
                className={styles.icon}
              />
            </li>
            <li>
              Webflow{" "}
              <Image
                src={webflow}
                alt="Webflow"
                height={25}
                width={80}
                className={styles.icon}
              />
            </li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Node</li>
            <li>Redux</li>
            <li>SQL</li>
            <li>MongoDB</li>
          </ul>
          {/* <ul className={styles.skillsList}>
            <Image
              src={reactimg}
              border-radius={15}
              height={25}
              alt="React Logo"
              style={{}}
            />{" "}
            <li>Webflow</li>
            <Image
              src={shopi}
              border-radius={15}
              height={25}
              alt="Webflow Logo"
              style={{}}
            />{" "}
            <li>HTML</li>
            <li>CSS</li>
            <li>Node</li>
            <li>Redux</li>
            <li>SQL</li>
            <li>MongoDb</li>
          </ul> */}
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
