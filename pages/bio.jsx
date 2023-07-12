import React, { useState } from "react";
import Layout from "../comps/layout";
import Navbar from "../comps/navbar";
import styles from "../styles/bio.module.css";
import stylesII from "../styles/infoPara.module.css";
import imgRocket from "../public/rocket_.png";
import Image from "next/image";

function Bio() {
  const [showDiv, setShowDiv] = useState(true);

  const handleToggle = () => {
    setShowDiv(!showDiv);
  };
  return (
    <Layout>
      <Navbar />
      <button
        className={`${styles.toggButt} ${styles.press}`}
        onClick={handleToggle}
      >
        {showDiv ? "Short Bio" : "Timeline"}
      </button>
      {showDiv ? (
        <div className={styles.container}>
          <ul>
            <li>1990 - Born in Montevideo Uruguay, 5th and best child of 5 </li>
            <li>1996 - Entered School</li>
            <li>2008 - Flew my first aircraft</li>
            <li>2010 - Graduated from School</li>
            <li>2011 - Entered University to Study Business & Tourism</li>
            <li>2012 - Started taking German language lessons</li>
            <li>2013 - First Job in the Travel & Lifestyle</li>
            <li>2016 - Graduated from University</li>
            <li>2017/20 - Lived and worked by the beach and countryside</li>
            <li>2020 - First Javascript online course</li>
            <li>2022 - Joined Soy-Henry Full-Stack Bootcamp</li>
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
          applications and solutions for the 22nd Century. My passion por
          extreme sports, cinema, computers and photography inspire me to create
          amazing app user experiences that contribute to the use objectives. I
          prefer libraries that allow agile and smart developing to rocket the
          application's functionality. I am going to combine visuals with the
          use of the best tech and human practices to create volatile
          applications.
        </p>
      )}
    </Layout>
  );
}

export default Bio;
