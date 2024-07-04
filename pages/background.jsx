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
        <div className={styles.container}>
          <ul>
            <h2>Bio Timeline</h2>
            <li>1990 - Born in Montevideo Uruguay, best child of 5 </li>
            <li>1996 - Entered School</li>
            <li>2008 - Flew my first aircraft</li>
            <li>2010 - Graduated from School</li>
            <li>2011 - Joined University Business & Tourism Mgmnt.</li>
            <li>2012 - Began learning German language</li>
            <li>2013 - First Job in Travel & Lifestyle</li>
            <li>2016 - Graduated from Business School</li>
            <li>2020 - Began programming</li>
            <li>2022 - Joined Remote Full-Stack Dev. Bootcamp</li>
            <li className={styles.devHighlight}>
              {" "}
              2023 - Full-Stack Developer
            </li>
            <li className={styles.devHighlight}>
              2024 - Product Management Specialisation
            </li>
            <Image src={imgRocket} height={35} />
          </ul>{" "}
        </div>
      ) : (
        <p className={stylesII.container}>
          I am a Digital Product Designer and Full-Stack Developer with a strong
          background in management and innovative skills. My mission is to
          create exceptional, next-level web and mobile applications. From a
          young age, I was captivated by time-management games like SimCity and
          Business Tycoon, and I often solved computer system-related problems
          on my own. This early fascination led me to dive into the development
          world, driven by a desire to bring my ideas to life as soon as they
          came to mind. My passion for extreme sports, cinema, computers, and
          photography fuels my creativity and inspires me to design outstanding
          user experiences. As an objective-focused professional, I excel at
          understanding and executing mission statements. I prioritize working
          with libraries and tools that support agile and smart development,
          ensuring rapid and effective results. I am dedicated to combining
          attractive visuals with cutting-edge technology and best practices to
          develop dynamic and engaging applications.
        </p>
      )}
      <button
        className={`${styles.toggButt} ${styles.press}`}
        onClick={handleToggle}
      >
        {showDiv ? "Services" : "Bio Timeline"}
      </button>
    </Layout>
  );
}

export default Background;
