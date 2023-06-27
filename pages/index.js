import Head from "next/head";
import Image from "next/image";
import git from "/Users/pedro/Desktop/webpage/github logoiso.png";
import linke from "/Users/pedro/Desktop/webpage/linkedin logo.png";
import Button from "../comps/button";

export default function Home() {
  const handleClick = () => {
    alert("button clicked!");
  };
  return (
    <div>
      <Head>
        <title>Soy Pedro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <h1> Pedro Strauch</h1>
          <h2> Full Stack Developer </h2>
        </div>
        <div>
          <text>
            I am a newbie Full-Stack dev with the mission of creating amazing,
            next level applications for the 22nd Century. My passion por extreme
            sports and photography inspire me to create amazing user
            experiences. I am fond of libraries that allow agile and smart
            developing that will rocket the UX. I am going to combine visuals
            with the use of the best practices and technologies to create
            attractive and volatile applications.
          </text>
        </div>
        <div>
          <Image alt="git" src={git} height={80} width={175} />
          <Image alt="linke" src={linke} height={80} width={90} />
        </div>
        <Button onClick={handleClick}>Contact Now</Button>{" "}
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
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
    //commit
  );
}
