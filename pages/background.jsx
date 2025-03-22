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
            <h2>E-Commerce Development</h2>I specialize in creating powerful,
            conversion-driven e-commerce stores. Whether you're launching a new
            online shop or optimizing an existing one, we provide end-to-end
            solutions to ensure seamless operations, stunning design, and
            maximum sales.
            <br />
            <h5>Shopify Configuration</h5>I adventured into the development
            world, driven by a desire to bring my ideas to life as soon as they
            came to mind. I prioritize working with libraries and tools that
            support agile and smart development, ensuring rapid and effective
            results. I am dedicated to combining attractive visuals with
            cutting-edge technology and best practices to develop dynamic and
            engaging applications.
            <h5>Template Personalization</h5>
            Stand out from the competition with a custom-branded store. We
            personalize Shopify themes to match your brand identity and provide
            an engaging user experience.
            <h5>Inventory & Pricing Management</h5>
            Keep your store organized with automated inventory tracking and
            dynamic pricing strategies to stay competitive and maximize profits.
            <h5>Product Descriptions & Content</h5>
            Captivate your customers with compelling product descriptions,
            high-quality images, and SEO-friendly content to boost search
            rankings and conversions.
            <h5>Email Marketing & Automations</h5>
            Turn visitors into loyal customers with automated email campaigns,
            abandoned cart recovery, and personalized promotions that drive
            engagement and sales.
            <h5>Domain Configuration</h5>I handle your domain setup and ensure
            seamless connection to your Shopify store, giving your business a
            professional and trustworthy online presence.
            <h5>Google Metrics & Analytics</h5>Track your store’s performance
            with Google Analytics and Shopify reports. We help you analyze
            customer behavior, optimize conversions, and make data-driven
            decisions.
            <h5>Dropshipping Setup & Fulfillment</h5>Want to sell without
            managing inventory? We configure and integrate dropshipping
            solutions, ensuring smooth supplier connections and automated order
            fulfillment.
          </div>
          <br />
        </div>
      ) : (
        <div className={styles.container}>
          <ul>
            <h2>Bio Timeline</h2>
            <li>1990 - Born in Montevideo Uruguay</li>
            <li>1996 - Entered School</li>
            <li>2004 - Learned sailing</li>
            <li>2008 - Flew my first aircraft</li>
            <li>2010 - Graduated from School</li>
            <li>2011 - Joined University Business & Tourism Mgmnt.</li>
            <li>2012 - Began learning German language</li>
            <li>2013 - First Job in Travel & Lifestyle</li>
            <li>2016 - Graduated from Business School</li>
            <li>2020 - Started learning Javascript</li>
            <li>2022 - Joined Remote Full-Stack Dev. Bootcamp</li>
            <li className={styles.devHighlight}>
              {" "}
              2023 - Full-Stack Developer
            </li>
            <li className={styles.devHighlight}>2024 - Product Management</li>
            <Image src={imgRocket} height={35} />
          </ul>{" "}
        </div>
      )}
      <button
        className={`${styles.toggButt} ${styles.press}`}
        onClick={handleToggle}
      >
        {showDiv ? "Photography" : "Web Services"}
      </button>
    </StructureLay>
  );
}

export default Background;
