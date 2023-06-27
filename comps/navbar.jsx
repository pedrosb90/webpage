import Link from "next/link";
import styles from "../styles/navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.mainTitle}> Pedro Strauch</h1>
        <h2 className={styles.title}> Full Stack Developer </h2>
      </div>
      <Link className={styles.link} href="/bio">
        Bio
      </Link>
      <Link className={styles.link} href="/stack">
        Stack
      </Link>
      <Link className={styles.link} href="/cvpage">
        CV
      </Link>
      <Link className={styles.link} href="/projects">
        Projects
      </Link>
      <Link className={`${styles.link} ${styles.more}`} href="/more">
        More
      </Link>
    </nav>
  );
}
export default Navbar;
