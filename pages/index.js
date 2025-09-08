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
            <title>The Pedro Lab | Diseño y Soluciones Digitales</title>
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
              <h2>Desarrollo E-Commerce Básico</h2>
              <h5>Lanzá y escala tu negocio vendiendo tus productos online</h5>
              <h4>Entraga en 1 mes</h4>
              <h1>USD 1900</h1>
              <h3>Plan Esencial 2 años</h3>
              <h5>Mantenimiento Básico + Dominio USD 35 por mes</h5>
              <ul>
                <li>Configuración y costumización de diseño</li>
                <li>Carga de coleciones de productos</li>
                <li>Integración de pasarelas de pago</li>
                <li>Dominio de marca</li>
                <li>SEO bâsico e indexación de Google</li>
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
          <div className={styles.container}>
            <p>The Pedro Lab 2025</p>
          </div>
          <MediaLinks />
        </div>
      </>
    </StructureLay>
  );
}
