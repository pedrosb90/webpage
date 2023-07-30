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
              src="https://res.cloudinary.com/ds9ebyi8j/video/upload/v1689356009/Pedro_dev_LQ_hz7zzq.mp4"
              height={100}
              width={600}
            />
            <MediaLinks />
            <Contact_button />
          </div>
        </>
      )}
    </Layout>
  );
}
