import React, { useState, useEffect } from "react";
import Contact_button from "../comps/contact_button";
import Layout from "../comps/layout";
import Navbar from "../comps/navbar";
import Loader from "../comps/loader";
import MediaLinks from "../comps/mediaLinks";
import { CldVideoPlayer } from "next-cloudinary";
import styles from "../styles/video.module.css";
import stylesL from "../styles/loader.module.css";

export default function Home() {
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setPageLoading(false);
    }, 1500);
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <Layout>
      {pageLoading ? (
        <div className={stylesL.loaderContainer}>
          <Loader />
        </div>
      ) : (
        <>
          <Navbar />
          <div className={styles.container}>
            <CldVideoPlayer
              id="pedvid"
              src="https://res.cloudinary.com/ds9ebyi8j/video/upload/v1720203899/WhatsApp_Video_2024-07-05_at_15.21.24_kz2umo.mp4"
              height={500}
              width={500}
            />
            <MediaLinks />
            <Contact_button />
          </div>
        </>
      )}
    </Layout>
  );
}
