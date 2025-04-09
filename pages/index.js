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
            <a className={stylesiii.cardBlack}>
              <h2>ONLINE STORE</h2>
              <h5>Launch & scale your online store with ease:</h5>
              <h4>Starting From:</h4>
              <h1>USD 1900</h1>
              <h3>Basic Plan</h3>
              <h5>MAINTENANCE From: USD 40 / month</h5>
              <h6>Shopify store setup & theme customization</h6>{" "}
              <h6>Product listings & collection setup</h6>{" "}
              <h6>Payment & shipping configuration</h6>{" "}
              <h6>Google Merchant Center & Console integration</h6>{" "}
              <Contact_button />
            </a>
            <a className={stylesiii.card}>
              <h2>WEBSITE </h2>
              <h5>Your digital presence, built for growth</h5>
              <h4>Starting From:</h4>
              <h1>USD 700</h1>
              <h3>Basic Plan</h3>
              <h5>MAINTENANCE From: USD 20 / month</h5>
              {/* <h6>USD 25 hourly maintenance fee</h6> */}
              <h6>Custom landing page design & development</h6>{" "}
              <h6>Domain setup & hosting configuration</h6>{" "}
              <h6>SEO & Google indexing</h6>{" "}
              <h6>Content strategy & SEO optimization</h6> <Contact_button />
            </a>
          </div>
          <MediaLinks />
        </div>
      </>
    </StructureLay>
  );
}
