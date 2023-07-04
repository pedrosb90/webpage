import Contact_button from "../comps/contact_button";
import styles from "../styles/infoPara.module.css";
import layout from "../styles/landingItems.module.css";
import Layout from "../comps/layout";
import Navbar from "../comps/navbar";
import MediaLinks from "../comps/mediaLinks";

export default function Home() {
  return (
    <Layout>
      <div className={layout.background}>
        <div className={`${layout.container}`}>
          <Navbar />
          <p className={styles.container}>
            I am a Full-Stack dev with the mission of creating amazing, next
            level applications and solutions for the 22nd Century. My passion
            por extreme sports, cinema, computers and photography inspire me to
            create amazing app user experiences that contribute to the use
            objectives. I prefer libraries that allow agile and smart developing
            to rocket the application's functionality. I am going to combine
            visuals with the use of the best tech and human practices to create
            volatile applications.
          </p>
          <MediaLinks />
          <Contact_button />
        </div>
      </div>
    </Layout>
  );
}
