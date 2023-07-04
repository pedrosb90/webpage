import Layout from "../comps/layout";
import Navbar from "../comps/navbar";
import Image from "next/image";
import styles from "../styles/stack.module.css";
import dipI from "../public/HenryFull.png";
import dipII from "../public/HenryTA.jpg";

function Stack() {
  return (
    <Layout>
      <Navbar />
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>Tech Skills</h1>
          <Image src={dipI} height={200} width={280} display="responsive" />
        </div>
        <div>
          <h1 className={styles.title}>Soft Skills</h1>
          <Image src={dipII} height={200} width={280} display="responsive" />
        </div>
      </div>
    </Layout>
  );
}

export default Stack;
