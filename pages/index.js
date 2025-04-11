import Head from "next/head";

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
        <html lang="en">
          <Head>
            <title>E-Commerce Development | Pedro Strauch</title>
            <meta
              name="description"
              content="Build and scale your digital presence with expert Shopify and website development. Custom solutions for startups and businesses."
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://pedrostrauch.com" />
            <meta property="og:image" content="/pstudio.jpeg" />
            <meta name="robots" content="index, follow" />
          </Head>
        </html>
        <Navbar />

        <div className={styles.container}>
          <div className={stylesiii.carousel}>
            <a className={stylesiii.cardBlack}>
              <h2>Online Store Development</h2>
              <h5>Launch and scale your Shopify store with ease</h5>
              <h4>Starting at:</h4>
              <h1>USD 1900</h1>
              <h3>Basic Plan</h3>
              <h5>Maintenance from USD 40 / month</h5>
              <ul>
                <li>Shopify store setup & theme customization</li>
                <li>Product listings & collection organization</li>
                <li>Payment gateway & shipping setup</li>
                <li>Google Merchant Center & Search Console integration</li>
              </ul>
              <Contact_button />
            </a>

            <a className={stylesiii.card}>
              <h2>Website Development</h2>
              <h5>Craft your digital presence for growth</h5>
              <h4>Starting at:</h4>
              <h1>USD 700</h1>
              <h3>Basic Plan</h3>
              <h5>Maintenance from USD 20 / month</h5>
              <ul>
                <li>Custom landing page design & development</li>
                <li>Domain setup & hosting configuration</li>
                <li>SEO & Google indexing</li>
                <li>Content strategy & keyword optimization</li>
              </ul>
              <Contact_button />
            </a>
          </div>
          <MediaLinks />
        </div>
      </>
    </StructureLay>
  );
}
