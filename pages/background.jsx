import React, { useState } from "react";
// import Layout from "../comps/layout";
import StructureLay from "../comps/structureLay";
import Navbar from "../comps/navbar";
import styles from "../styles/bio.module.css";
import stylesII from "../styles/infoPara.module.css";
import imgRocket from "../public/rocket_.png";
import Image from "next/image";

function Background() {
  const [showDiv, setShowDiv] = useState(true);

  const handleToggle = () => {
    setShowDiv(!showDiv);
  };
  return (
    <StructureLay>
      <Navbar />
      {showDiv ? (
        <div className={stylesII.container}>
          <div>
            <h2>Visibility, Engagement & Conversion</h2>
            <h3>SEO & Performance Optimization</h3>
            <p> Keyword research & content optimization </p>
            <p>On-page & off-page SEO strategies</p>
            <p>Performance tracking & analytics</p>
            <br />
            <h3>Social Media Marketing</h3>
            <p> Platform-specific content strategies</p>
            <p>Growth tactics & audience engagement</p>
            <p>Paid & organic campaign management</p>
            <p>Trend analysis & community building</p>
            <br />

            <h3> Influencer & Affiliate Marketing</h3>
            <p>Partnering with influencers for brand exposure </p>
            <p>Managing affiliate programs for performance-driven growth</p>
            <p>Content collaboration & campaign tracking</p>
            <p>Audience targeting & engagement optimization</p>
            <br />
          </div>
          <br />
        </div>
      ) : (
        <div className={stylesII.container}>
          <div>
            <h2>Creation & Storytelling</h2>
            <h3>Product & Real Estate Photography</h3>
            <p>
              {" "}
              High-quality images for e-commerce, advertising, and property
              listings
            </p>
            <p>
              Styled shoots for products or real estate features, highlighting
              key details
            </p>
            <p>
              Optimized images for websites, social media, and other marketing
              materials
            </p>
            <br />
            <h3>Social Media Videos</h3>
            <p>
              {" "}
              Engaging short-form videos for Instagram, TikTok, and other
              platforms
            </p>
            <p>Content tailored to boost engagement and brand awareness</p>
            <p>Story-driven content to connect with the audience</p>
            <br />

            <h3> Web Videos with Storytelling</h3>
            <p>
              Website videos designed to convey brand stories or product
              benefits
            </p>
            <p>
              Creative narratives to enhance user experience and conversions
            </p>
            <p>Videos for landing pages, tutorials, or testimonials</p>
            <br />
          </div>
          <br />
        </div>
      )}
      <button
        className={`${styles.toggButt} ${styles.press}`}
        onClick={handleToggle}
      >
        {showDiv ? "Content" : "Reach"}
      </button>
    </StructureLay>
  );
}

export default Background;
