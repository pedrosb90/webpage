import Head from "next/head";
import bgstyle from "../styles/landingItems.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Soy Pedro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${bgstyle.container} ${bgstyle.background}`}>
        {children}
      </main>
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
