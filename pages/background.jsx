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
              2023 - Full-Stack Developer COMPLETED
            </li>
            <li className={styles.yearHL}>2024 -</li>
            <Image src={imgRocket} height={35} />
          </ul>{" "}
        </div>
      ) : (
        <p className={stylesII.container}>
          I am a Full-Stack dev with the mission of creating amazing, next level
          web and mobile applications. When I was around 10 years old I loved
          Time-Mgmnt games like Sim-City or Business Tycoons, and I would solve
          computer system related problems myself. As a grown-up, I jumped into
          the development world because I wanted to be able to create my ideas
          as soon as they got into my brain. My passion por extreme sports,
          cinema, computers and photography inspire me to create amazing user
          experiences. I am an objective focused person who understands mission
          statements very well. I choose working with libraries that allow agile
          and smart developing that rocket results. I am going to combine
          attractive visuals with the use of the best tech and human practices
          to create volatile applications.
        </p>
      )}
      <button
        className={`${styles.toggButt} ${styles.press}`}
        onClick={handleToggle}
      >
        {showDiv ? "Show Bio" : "Show Timeline"}
      </button>
    </Layout>
  );
}

export default Background;
