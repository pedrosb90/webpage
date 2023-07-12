import Contact_button from "../comps/contact_button";
import layout from "../styles/landingItems.module.css";
import Layout from "../comps/layout";
import Navbar from "../comps/navbar";
import MediaLinks from "../comps/mediaLinks";
import { CldVideoPlayer } from "next-cloudinary";
import styles from "../styles/video.module.css";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <div className={styles.container}>
        <CldVideoPlayer id="pedvid" src="https://youtube/j5lMLbswsT0" />
        <MediaLinks />
        <Contact_button />
      </div>
    </Layout>
  );
}
