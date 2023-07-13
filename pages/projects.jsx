import Layout from "../comps/layout";
import Navbar from "../comps/navbar";
import Image from "next/legacy/image";
import styles from "../styles/projects.module.css";

function Projects() {
  return (
    <Layout>
      <Navbar />{" "}
      <div>
        <div className={styles.card}>
          <h1>Odyssey</h1>
          <h2>The Exo-Planet Colony Manager</h2>{" "}
          <Image src="/marscolony.png" width={120} height={200} alt="mars" />
          <p>
            I am currently working on a Front-End Dashboard that recreates a
            controll Space Agency Colony Management Dashboard. Stay tuned for
            updates..{" "}
          </p>
        </div>

        <div className={styles.card}>
          <h1>Med-Connect</h1>
          <h2>Clinic Appointment App</h2>
          <p>
            This is our Bootcamp's final group project; an interactive web
            application using Next.js, SQL, Express, Redux, Railway, that
            includes, among other features, user authentication, Cloudinary
            image mgmnt., Mercadopago payment platform, and mailing.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
