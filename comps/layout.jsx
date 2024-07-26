import Head from "next/head";
import bgstyle from "../styles/landingItems.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Soy Pedro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${bgstyle.container} `}>{children}</main>
      <video
        autoPlay
        playsInline
        muted
        loop
        className={`${bgstyle.container} ${bgstyle.videoBackground}`}
      >
        <source
          src="https://res.cloudinary.com/ds9ebyi8j/video/upload/v1722011343/DEMO_HundeSalon_720_osn0vm.mov"
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
  );
};

export default Layout;
