import Head from "next/head";
import bgstyle from "../styles/landingItems.module.css";
import pstudio from "../public/pstudiologo2.jpeg";
import Image from "next/image";
import Hamburger from "./hamburger";
import { MenuProvider } from "./menuContext";

const Layout = ({ children }) => {
  return (
    <MenuProvider>
      <div>
        <Head>
          <title>PS Studio Digital Solutions</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={`${bgstyle.container} `}>{children}</main>
        <div className={bgstyle.navlogo}>
          <Image
            src={pstudio}
            border-radius={15}
            height={60}
            alt="Pedro Strauch studio Logo"
          />
          <h1 className={bgstyle.heading}>Solutions Design</h1>

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
            src="https://res.cloudinary.com/ds9ebyi8j/video/upload/v1725635750/webpage_background_bn_-_1_kizmxy.mov"
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
