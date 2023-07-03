import Layout from "../comps/layout";
import Navbar from "../comps/navbar";
import styles from "../styles/bio.module.css";

function Bio() {
  return (
    <Layout>
      <Navbar />
      <div className={styles.container}>
        <ul>
          <li>1990 - Born in Montevideo Uruguay, 5th child of 5. </li>
          <li>1996 - Entered School</li>
          <li>2010 - Graduated from School</li>
          <li>2011 - Entered University to Study Business & Tourism</li>
          <li>2012 - Started taking German language lessons</li>
          <li>2016 - Graduated from University</li>
        </ul>{" "}
      </div>
    </Layout>
  );
}

export default Bio;
