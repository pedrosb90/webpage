import Image from "next/legacy/image";
import myCv1 from "../public/cvrefp1.jpg";
import myCv2 from "../public/cvrefp2.jpg";
import Navbar from "../comps/navbar";
import styles from "../styles/cv.module.css";
import Layout from "../comps/layout";

function Cv() {
  return (
    <Layout>
      <Navbar />
      <Image
        src={myCv1}
        width={1270}
        height={1900}
        alt="CV Page 1"
        layout="responsive"
      />
      <Image
        src={myCv2}
        width={1270}
        height={1900}
        alt="CV Page 2"
        layout="responsive"
      />
    </Layout>
  );
}

export default Cv;
