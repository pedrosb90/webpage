import React, { useState } from "react";
// import Layout from "../comps/layout";
import StructureLay from "../comps/structureLay";
import Navbar from "../comps/navbar";
import styles from "../styles/bio.module.css";
import stylesII from "../styles/infoPara.module.css";
import imgRocket from "../public/rocket_.png";
import Image from "next/image";

function Background() {
  const [showDiv, setShowDiv] = useState(true);

  const handleToggle = () => {
    setShowDiv(!showDiv);
  };
  return (
    <StructureLay>
      <Navbar />
      {showDiv ? (
        <div className={stylesII.container}>
          <div>
            <h2>E-commerce & Experiencia de Marca</h2>
            <h3>Tiendas Online que Venden</h3>
            <p>
              Desarrollo de tiendas online enfocadas en conversión, adaptadas a
              negocios de gastronomía, arte, moda, hoteles y viajes.
            </p>
            <p>
              Configuración completa: desde el diseño hasta la integración de
              pagos y envíos.
            </p>
            <p>Optimización para SEO, performance y escalabilidad.</p>
            <br />

            <h3>Imagen y Estrategia de Marca</h3>
            <p>
              Creación de imágenes de marca coherentes con la estrategia y
              valores de cada cliente.
            </p>
            <p>
              Producción de fotografías y contenidos visuales adaptados a la
              identidad del negocio.
            </p>
            <p>Diseño de landing pages que comunican y convierten.</p>
            <br />

            <h3>Experiencia en Emprendimiento Digital</h3>
            <p>
              Experiencia directa creando y escalando mis propias ideas de
              e-commerce y landing pages.
            </p>
            <p>
              Conocimiento práctico de lo que funciona en el mercado y cómo
              aplicarlo a tu negocio.
            </p>
            <p>
              Acompañamiento estratégico para negocios que buscan crecer en el
              entorno digital.
            </p>
            <br />
          </div>
          <br />
        </div>
      ) : (
        <div className={stylesII.container}>
          <div>
            <h2>Desarrollo Web y Aplicaciones a Medida</h2>

            <h3>Apps y Sistemas Dinámicos</h3>
            <p>
              Creación de aplicaciones web personalizadas que consumen APIs y
              gestionan datos en tiempo real.
            </p>
            <p>
              Integración de servicios externos, pasarelas de pago y soluciones
              escalables.
            </p>
            <p>
              Desarrollo adaptable a diferentes industrias: gastronomía,
              turismo, retail, arte y moda.
            </p>
            <br />

            <h3>Bases de Datos y Gestión de Contenido</h3>
            <p>
              Diseño de bases de datos optimizadas para rendimiento y seguridad.
            </p>
            <p>
              Creación de galerías, catálogos y listados dinámicos conectados a
              bases de datos.
            </p>
            <p>
              Administración sencilla para el cliente, con paneles o
              integraciones personalizadas.
            </p>
            <br />

            <h3>Pequeños Sistemas de Reservas</h3>
            <p>
              Desarrollo de sistemas de reservas simples y efectivos para
              hoteles, restaurantes y experiencias.
            </p>
            <p>
              Integración con correos automáticos, notificaciones y
              disponibilidad en tiempo real.
            </p>
            <p>
              Enfoque en usabilidad y conversión para maximizar reservas sin
              complejidad innecesaria.
            </p>
            <br />
          </div>
          <br />
        </div>
      )}
      <button
        className={`${styles.toggButt} ${styles.press}`}
        onClick={handleToggle}
      >
        {showDiv ? "Backend" : "Presencia Digital"}
      </button>
    </StructureLay>
  );
}

export default Background;
