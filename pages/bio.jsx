import Layout from "../comps/layout";
import Navbar from "../comps/navbar";
import styles from "../styles/bio.module.css";
import imgRocket from "../public/rocket_.png";
import Image from "next/image";

function Bio() {
  return (
    <Layout>
      <Navbar />
      <div className={styles.container}>
        <ul>
          <li>1990 - Born in Montevideo Uruguay, 5th child of 5. </li>
          <li>1996 - Entered School</li>
          <li className={styles.eduHighlight}>2010 - Graduated from School</li>
          <li>2011 - Entered University to Study Business & Tourism</li>
          <li>2012 - Started taking German language lessons</li>
          <li>2016 - Graduated from University</li>
          <li>2020 - Began learning Javascript</li>
          <li>2022 - Joined Soy-Henry Full-Stack Bootcamp</li>
          <li className={styles.devHighlight}>
            {" "}
            2023 - Full-Stack Developer COMPLETED
          </li>
          <li>2024 -</li>
          <Image src={imgRocket} height={35} />
        </ul>{" "}
      </div>
    </Layout>
  );
}

export default Bio;
