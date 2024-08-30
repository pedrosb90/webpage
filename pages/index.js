import Contact_button from "../comps/contact_button";
// import Layout from "../comps/layout";
import StructureLay from "../comps/structureLay";
import Navbar from "../comps/navbar";
import Loader from "../comps/loader";
import MediaLinks from "../comps/mediaLinks";
// import { CldVideoPlayer, CloudinaryContext } from "next-cloudinary";
import styles from "../styles/video.module.css";

export default function Home() {
  return (
    <StructureLay>
      <>
        <Navbar />
        <div className={styles.container}>
          {/* <CldVideoPlayer
              cloud_name="ds9ebyi8j"
              id="pedrointro"
              width={1920}
              height={800}
              src="https://res.cloudinary.com/ds9ebyi8j/video/upload/v1720203899/pedvid.mp4"
            /> */}
          <iframe
            src="https://res.cloudinary.com/ds9ebyi8j/video/upload/v1721850041/WhatsApp_Video_2024-07-24_at_16.35.51_k41d0v.mp4"
            frameborder="0"
            width={400}
            height={300}
          />
          <MediaLinks />
          <Contact_button />
        </div>
      </>
    </StructureLay>
  );
}
