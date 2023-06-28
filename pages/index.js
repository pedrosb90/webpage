import Head from "next/head";
import Image from "next/legacy/image";
import git from "/Users/pedro/Desktop/webpage/github logoiso.png";
import linke from "/Users/pedro/Desktop/webpage/linkedin logo.png";
import Navbar from "../comps/navbar";
import Contact_button from "../comps/contact_button";
import styles from "../styles/infoPara.module.css";
import layout from "../styles/landingItems.module.css";
import medialayouts from "../styles/mediaLinks.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Soy Pedro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={layout.container}>
          {" "}
          <Navbar />
          <p className={styles.container}>
            I am a newbie Full-Stack dev with the mission of creating amazing,
            next level applications for the 22nd Century. My passion por extreme
            sports and photography inspire me to create amazing user
            experiences. I am fond of libraries that allow agile and smart
            developing that will rocket the UX. I am going to combine visuals
            with the use of the best practices and technologies to create
            attractive and volatile applications.
          </p>
        </div>
        <div className={medialayouts.container}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/pedrosb90/"
          >
            <Image
              className={medialayouts.press}
              alt="git"
              src={git}
              height={80}
              width={175}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/pedrostrauchbraga/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Image
              className={medialayouts.press}
              alt="linke"
              src={linke}
              height={80}
              width={90}
            />
          </a>
        </div>
        <Contact_button />
      </main>

      <style jsx>{`
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin-bottom: 0;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          height: 100vh;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
