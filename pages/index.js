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
        <CldVideoPlayer
          id="pedvid"
          src="https://res.cloudinary.com/ds9ebyi8j/video/upload/v1689356009/Pedro_dev_LQ_hz7zzq.mp4"
          height={100}
          width={600}
        />
        <MediaLinks />
        <Contact_button />
      </div>
    </Layout>
  );
}
