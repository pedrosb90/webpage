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
            I am a newbie Full-Stack dev with the mission of creating amazing,
            next level applications for the 22nd Century. My passion por extreme
            sports and photography inspire me to create amazing user
            experiences. I am fond of libraries that allow agile and smart
            developing that will rocket the UX. I am going to combine visuals
            with the use of the best practices and technologies to create
            attractive and volatile applications.
          </p>
        </div>
        <MediaLinks />
        <Contact_button />
      </div>
    </Layout>
  );
}
