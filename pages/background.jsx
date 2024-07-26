import React, { useState } from "react";
import Layout from "../comps/layout";
import Navbar from "../comps/navbar";
import styles from "../styles/bio.module.css";
import stylesII from "../styles/infoPara.module.css";
import imgRocket from "../public/rocket_.png";
import Image from "next/image";

function Background() {
  const [showDiv, setShowDiv] = useState(true);

  const handleToggle = () => {
    setShowDiv(!showDiv);
  };
  return (
    <Layout>
      <Navbar />
      {showDiv ? (
        <div className={stylesII.container}>
          <div>
            <h2>Digital Creator</h2>I am a Digital Product Designer and
            Full-Stack Developer with a strong background in management and
            innovative skills. My mission is to create exceptional, next-level
            web and mobile applications. I adventured into the development
            world, driven by a desire to bring my ideas to life as soon as they
            came to mind. I prioritize working with libraries and tools that
            support agile and smart development, ensuring rapid and effective
            results. I am dedicated to combining attractive visuals with
            cutting-edge technology and best practices to develop dynamic and
            engaging applications.
            <h2>Marketing</h2>
            As an objective-focused professional, I excel at understanding and
            executing mission statements. My passion for extreme sports, cinema,
            computers, and photography fuels my creativity and inspires me to
            design outstanding web and mobile applications that boost identity
            communication.
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <ul>
            <h2>Bio Timeline</h2>
            <li>1990 - Born in Montevideo Uruguay</li>
            <li>1996 - Entered School</li>
            <li>2004 - Learned sailing</li>
            <li>2008 - Flew my first aircraft</li>
            <li>2010 - Graduated from School</li>
            <li>2011 - Joined University Business & Tourism Mgmnt.</li>
            <li>2012 - Began learning German language</li>
            <li>2013 - First Job in Travel & Lifestyle</li>
            <li>2016 - Graduated from Business School</li>
            <li>2020 - Started learning Javascript</li>
            <li>2022 - Joined Remote Full-Stack Dev. Bootcamp</li>
            <li className={styles.devHighlight}>
              {" "}
              2023 - Full-Stack Developer
            </li>
            <li className={styles.devHighlight}>2024 - Product Management</li>
            <Image src={imgRocket} height={35} />
          </ul>{" "}
        </div>
      )}
      <button
        className={`${styles.toggButt} ${styles.press}`}
        onClick={handleToggle}
      >
        {showDiv ? "Short Bio" : "Services"}
      </button>
    </Layout>
  );
}

export default Background;
