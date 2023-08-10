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
          <h1 className={styles.mainTitle}>Odyssey</h1>
          <h2 className={styles.subTitle}>
            The Exo-Planet Colony Manager
          </h2>{" "}
          {/* <Image src="/marscolony.png" width={220} height={150} alt="mars" /> */}
          <p className={styles.body}>
            I am currently working on a Front-End Dashboard that recreates a
            controll Space Agency Colony Management Panel. This project
            implicates a mock API created for the purpose, intense interphase
            design and state management skills. Stay tuned for updates!{" "}
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
            <Image src={youtubeiso} alt="youtube" width={30} height={18} />{" "}
          </div>
          <p className={styles.body}>
            Final group bootcamp project using AGILE in a 3 sprint schedule; an
            interactive web application using Next.js - Tailwind, SQL, Redux,
            Express and Railway: User forms, User authentication, Cloudinary,
            Payment gateway and Mailing confirmations.
          </p>
        </a>
        <a
          href="https:eduardostrauch.art"
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
            Shopify store that lists paintings for sale. I personalized UI to
            our needs and administer stock and sales, aswell as code updates
            needed as we grow.
          </p>
        </a>
      </div>
    </Layout>
  );
}

export default Projects;
