import Layout from "../comps/layout";
import Navbar from "../comps/navbar";
import Image from "next/legacy/image";
import styles from "../styles/projects.module.css";
import youtubeiso from "../public/youtube.png";
import esu from "../public/esuweb_screen.png";
import medi from "../public/medicinaweb.png";
import soon from "../public/web project img 1.jpeg";
import mnweb from "../public/mn_cover.png";

function Projects() {
  return (
    <Layout>
      <Navbar />{" "}
      <div className={styles.carousel}>
        <div className={styles.card}>
          <h1 className={styles.mainTitle}>MN Arquitectura</h1>
          <h2 className={styles.subTitle}>Architect & Design Studio</h2>
          <h3 className={styles.stats}>Stage: Production</h3>
          <h3 className={styles.stats}>Status: Complete</h3>
          <Image src={mnweb} width={220} height={140} alt="soon" />
          <p className={styles.text}>Webflow Portfolio Webpage</p>
        </div>

        <a
          href="https://youtu.be/emK9kB3gcEU"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <h1 className={styles.mainTitle}>Med-Connect</h1>
          <h2 className={styles.subTitle}>Clinic Appointment App</h2>
          <h3 className={styles.stats}>Stage: Production test</h3>
          <h3 className={styles.stats}>Status: Complete-Offline</h3>
          <Image src={medi} alt="medicina" width={220} height={140} />{" "}
          <p className={styles.text}>
            Web-App - Next.js - Tailwind, SQL, Redux - Express - Railway - User
            forms, User authentication, Cloudinary, Payment gateway and Mailing.
          </p>
        </a>
        <a
          href="https://eduardostrauch.art/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <h1 className={styles.mainTitle}>Eduardo Strauch Art</h1>
          <h2 className={styles.subTitle}>Shopify Store</h2>
          <h3 className={styles.stats}>Stage: Production</h3>
          <h3 className={styles.stats}>
            Status: Complete - Regular Maintenance
          </h3>
          <Image src={esu} alt="esu" width={220} height={140} />{" "}
          <p className={styles.text}>
            Shopify store. Personalized UI - Stock Management - Regular updates
          </p>
        </a>
        <div className={styles.card}>
          <h1 className={styles.mainTitle}>Meals To Go</h1>
          <h2 className={styles.subTitle}>Restaurant ordering App</h2>
          <h3 className={styles.stats}>Stage: Developement</h3>
          <h3 className={styles.stats}>Status: Incomplete</h3>
          <Image src={soon} width={220} height={140} alt="soon" />
          <p className={styles.text}>React-Native e-Commerce Mobile App</p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.mainTitle}>Odyssey</h1>
          <h2 className={styles.subTitle}>The Exo-Planet Colony Manager</h2>
          <h3 className={styles.stats}>Stage: Developement</h3>
          <h3 className={styles.stats}>Status: Incomplete</h3>
          <Image src="/marscolony.png" width={220} height={140} alt="mars" />
          <p className={styles.text}>
            Front-End Web Dashboard emmulating a Space Colony Management Panel.
            Next.js - Mock API - Redux - Figma
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
