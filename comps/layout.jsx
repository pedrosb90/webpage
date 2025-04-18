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
          <title>
            Online Store & Website Development - Pedro Strauch: React & CMS
          </title>
          <link rel="icon" href="/favicon.ico" />{" "}
          <meta
            name="description"
            content="Expert digital solutions for startups and e-commerce brands. Grow your business with Shopify, content marketing, and conversion-focused strategies."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Online Store & Website Development – Pedro Strauch: React & CMS"
          />
          <meta
            property="og:description"
            content="Expert digital solutions for startups and e-commerce brands. Grow your business with Shopify, content marketing, and conversion-focused strategies."
          />
          <meta property="og:url" content="https://pedrostrauch.com" />
          <meta property="og:image" content="/pstudio.jpeg" />
          <meta name="robots" content="index, follow" />
        </Head>
        <main className={`${bgstyle.container} `}>{children}</main>
        <div className={bgstyle.navlogo}>
          <Image
            src={pstudio}
            border-radius={15}
            height={120}
            alt="Pedro Strauch Logo"
          />{" "}
          {/* <Image
            src={shopi}
            border-radius={15}
            height={45}
            alt="Shopi Logo"
            style={{ float: "right" }}
          /> */}
          <h1 className={bgstyle.heading}>
            Digital Solutions to Sell & Grow Online
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
