import React, { useState, useEffect } from "react";
import "../styles/fonts.css";
import Layout from "../comps/layout";
import Loader from "../comps/loader";
import stylesL from "../styles/loader.module.css";

function MyApp({ Component, pageProps }) {
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setPageLoading(false);
    }, 1500);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return pageLoading ? (
    <Layout>
      <div className={stylesL.loaderContainer}>
        <Loader />
      </div>
    </Layout>
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
