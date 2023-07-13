import Layout from "../comps/layout";
import Navbar from "../comps/navbar";
import Image from "next/legacy/image";
import styles from "../styles/projects.module.css";
import youtubeiso from "../public/youtube.png";

function Projects() {
  return (
    <Layout>
      <Navbar />{" "}
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.mainTitle}>Odyssey</h1>
          <h2 className={styles.subTitle}>
            The Exo-Planet Colony Manager
          </h2>{" "}
          {/* <Image src="/marscolony.png" width={220} height={150} alt="mars" /> */}
          <p className={styles.body}>
            I am currently working on a Front-End Dashboard that recreates a
            controll Space Agency Colony Management Dashboard. Stay tuned for
            updates..{" "}
          </p>
        </div>
        <a
          href="https://youtu.be/emK9kB3gcEU"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.atag}
        >
          {" "}
          <div className={styles.card}>
            <h1 className={styles.mainTitle}>Med-Connect</h1>
            <h2 className={styles.subTitle}>Clinic Appointment App</h2>
            <Image src={youtubeiso} alt="youtube" width={50} height={50} />
            <p className={styles.body}>
              This is our Bootcamp's final group project; an interactive web
              application using Next.js, SQL, Express, Redux, Railway, that
              includes, among other features, user authentication, Cloudinary
              image mgmnt., Mercadopago payment platform, and mailing.
            </p>
          </div>
        </a>
      </div>
    </Layout>
  );
}

export default Projects;
