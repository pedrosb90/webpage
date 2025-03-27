import Contact_button from "../comps/contact_button";
import StructureLay from "../comps/structureLay";
import Navbar from "../comps/navbar";
import MediaLinks from "../comps/mediaLinks";
import styles from "../styles/video.module.css";
import stylesiii from "../styles/infoservices.module.css";

export default function Home({}) {
  return (
    <StructureLay>
      <>
        <Navbar />

        <div className={styles.container}>
          <div className={stylesiii.carousel}>
            <a className={stylesiii.card}>Hola</a>
            <a className={stylesiii.card}>Que</a>
          </div>
          <MediaLinks />
        </div>
        {/* <Contact_button /> */}
      </>
    </StructureLay>
  );
}
