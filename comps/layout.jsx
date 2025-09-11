import Head from "next/head";
import bgstyle from "../styles/landingItems.module.css";
import pstudio from "../public/digilogonew.jpg";
import shopi from "../public/shopiblack.png";
import Image from "next/image";
import Hamburger from "./hamburger";
import { MenuProvider } from "./menuContext";

const Layout = ({ children }) => {
  return (
    <MenuProvider>
      <div>
        <Head>
          <title>The Pedro Lab | Diseño y soluciones digitales </title>
          <link rel="icon" href="/favicon.ico" />{" "}
          <meta
            name="description"
            content="Soluciones digitales para tu marca, integrando Shopify y otros CMS de e-commerce para vender online en Uruguay y resto del mundo. Print on demand y más."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="The Pedro Lab: Soluciones digitales con diseño e-commerce."
          />
          <meta
            property="og:description"
            content="Soluciones digitales para tu marca, integrando Shopify y otros CMS de e-commerce para vender online en Uruguay y resto del mundo. Print on demand y más."
          />
          <meta property="og:url" content="https://thepedrolab.vercel.app/" />
          <meta
            property="og:image"
            content="https://thepedrolab.vercel.app/screendos.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />{" "}
          <meta name="robots" content="index, follow" />
        </Head>
        <main className={`${bgstyle.container} `}>{children}</main>
        <div className={bgstyle.navlogo}>
          <h1 className={bgstyle.mainheading}>THE PEDRO LAB </h1>
          <h1 className={bgstyle.heading}>
            Conecto tu producto al mundo digital con diseño y estrategia{" "}
          </h1>
          <Hamburger />
        </div>
        <video
          autoPlay
          playsInline
          muted
          loop
          className={`${bgstyle.container} ${bgstyle.videoBackground}`}
        >
          <source
            src="https://res.cloudinary.com/ds9ebyi8j/video/upload/v1742670987/web_bgnd_2025_er1dft.mp4"
            type="video/mp4"
          />
          Your browser does not support this video.
        </video>
        <style jsx global>{`
          html,
          body {
            padding: 0;
            height: 100vh;
            margin: 0;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    </MenuProvider>
  );
};

export default Layout;
