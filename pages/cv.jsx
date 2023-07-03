import Image from "next/legacy/image";
import myCv1 from "../public/cvrefp1.jpg";
import myCv2 from "../public/cvrefp2.jpg";
import Navbar from "../comps/navbar";
import Layout from "../comps/layout";
import styles from "../styles/cv.module.css";

function Cv() {
  return (
    <Layout>
      <Navbar />
      <div className={styles.imageContainer}>
        <Image
          src={myCv1}
          width={660}
          height={890}
          alt="CV Page 1"
          margin-left={50}
        />
        {/* <Image
          src={myCv2}
          width={770}
          height={1200}
          alt="CV Page 2"
        /> */}
      </div>
    </Layout>
  );
}

export default Cv;
