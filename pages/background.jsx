import React, { useState } from "react";
// import Layout from "../comps/layout";
import StructureLay from "../comps/structureLay";
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
    <StructureLay>
      <Navbar />
      {showDiv ? (
        <div className={stylesII.container}>
          <div>
            <h2>Digital Product</h2>I am a Digital Product Designer and
            Full-Stack Developer with a strong background in management and
            innovative skills. My mission is to create exceptional, next-level
            web and mobile applications.
            <br />
            <br />I adventured into the development world, driven by a desire to
            bring my ideas to life as soon as they came to mind. I prioritize
            working with libraries and tools that support agile and smart
            development, ensuring rapid and effective results. I am dedicated to
            combining attractive visuals with cutting-edge technology and best
            practices to develop dynamic and engaging applications.
            <h2>Video Content</h2>
            In a world where visuals speak louder than words, my video creation
            service is dedicated to producing high-quality footage and
            illustrations that captivate and inspire. I am passionate about
            standing out from the crowd, bringing a fresh perspective to every
            project with a focus on relevance, originality, and impact.
            <br />
            <br />
            Every frame tells a story, and I strive to ensure that each story is
            not only visually stunning but also deeply meaningful. With an eye
            for detail and a commitment to excellence, I craft videos that
            resonate with your audience and leave a lasting impression.
            <br />
            <br />
            Whether you're looking to promote a brand, tell a personal story, or
            convey a powerful message, my video creation service will elevate
            your vision to new heights. Let’s create something extraordinary
            together that truly stands out and speaks to the world.
            <br />
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
    </StructureLay>
  );
}

export default Background;
