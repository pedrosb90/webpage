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
              <h4>Plan esencial 2 ańos | entraga en 20 días</h4>
              <h1>USD 1900</h1>
              {/* <h3>Plan Esencial 2 años</h3> */}
              <h5>Mantenimiento Básico + Dominio USD 35 mensuales</h5>
              <div className={stylesiii.items}>
                <h6>Configuración y personalización de diseño</h6>
                <h6>Carga de colecciones de productos</h6>
                <h6>Integración de pasarelas de pago</h6>
                <h6>Dominio de marca</h6>
                <h6>SEO básico e indexación en Google</h6>
                <h6>Google Merchant Center</h6>
              </div>
              <Contact_button />
            </a>

            <a className={stylesiii.card}>
              <h2>Diseño Web Express</h2>
              <h5>
                Plasmá tu presencia digital | Landingpage & Web CMS Básico
              </h5>
              <h4>Plan esencial 2 ańos | entraga en 7 días</h4>
              <h1>USD 800</h1>
              {/* <h3>Basic Plan</h3> */}
              <h5>Mantenimiento Básico + Dominio USD 20 mensuales</h5>
              <div className={stylesiii.items}>
                <h6>Diseño de plantilla a medida</h6>
                <h6>Responsive UI & UX</h6>

                <h6>Configuración de dominio y hosting</h6>
                <h6>SEO básico e indexación en Google</h6>
              </div>
              <Contact_button />
            </a>

            <a className={stylesiii.card}>
              <h2>Creación a medida</h2>
              <h5>Tu proyecto Desarrollo Web | Mobile</h5>
              <h4>Desarrollo</h4>
              <h1>USD 800 + USD 28|hora</h1>
              {/* <h3>Basic Plan</h3> */}
              <h5>Mantenimiento Básico + Dominio USD 20 mensuales</h5>
              <div className={stylesiii.items}>
                <h6>Diseño personalizado según tu marca</h6>
                <h6>Arquitectura de contenido adaptada </h6>
                <h6>Desarrollo de funcionalidades específicas</h6>
                <h6>Optimización responsive y UX</h6>
                <h6>Configuración de dominio y hosting a medida</h6>
                <h6>SEO básico e indexación en Google</h6>
              </div>
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
