import Layout from "../comps/layout";
import Navbar from "../comps/navbar";
import Image from "next/legacy/image";
import styles from "../styles/projects.module.css";
import youtubeiso from "../public/youtube.png";

function Projects() {
  return (
    <Layout>
      <Navbar />{" "}
      <div>
        <div className={styles.card}>
          <h1 className={styles.mainTitle}>Meals To Go</h1>
          <h2 className={styles.subTitle}>Restaurant ordering App</h2>{" "}
          {/* <Image src="/marscolony.png" width={220} height={150} alt="mars" /> */}
          <p className={styles.body}>React-Native e-Commerce Mobile App</p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.mainTitle}>Odyssey</h1>
          <h2 className={styles.subTitle}>
            The Exo-Planet Colony Manager
          </h2>{" "}
          {/* <Image src="/marscolony.png" width={220} height={150} alt="mars" /> */}
          <p className={styles.body}>
            Front-End Web Dashboard emmulating a Space Colony Management Panel.
            Next.js - Mock API - Redux - Figma
          </p>
        </div>

        <a
          href="https://youtu.be/emK9kB3gcEU"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.atag}
        >
          <h1 className={styles.mainTitle}>Med-Connect</h1>
          <h2 className={styles.subTitle}>Clinic Appointment App</h2>
          <div className={styles.image}>
            {/* <Image src={youtubeiso} alt="youtube" width={30} height={18} />{" "} */}
          </div>
          <p className={styles.body}>
            Final group bootcamp project AGILE. Web-App - Next.js - Tailwind,
            SQL, Redux - Express - Railway - User forms, User authentication,
            Cloudinary, Payment gateway and Mailing confirmations.
          </p>
        </a>
        <a
          href="https://eduardostrauch.art/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.atag}
        >
          <h1 className={styles.mainTitle}>Eduardo Strauch Art</h1>
          <h2 className={styles.subTitle}>Shopify Store</h2>
          {/* <div className={styles.image}>
            <Image src={youtubeiso} alt="youtube" width={30} height={18} />{" "}
          </div> */}
          <p className={styles.body}>
            Shopify store. Personalized UI - Stock Management - Regular updates
          </p>
        </a>
      </div>
    </Layout>
  );
}

export default Projects;
