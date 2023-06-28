import Link from "next/link";
import styles from "../styles/navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.mainTitle}> Pedro Strauch</h1>
        <h2 className={styles.title}> Full Stack Developer </h2>
      </div>
      <Link className={`${styles.link} ${styles.press} `} href="/bio">
        Bio
      </Link>
      <Link className={`${styles.link} ${styles.press} `} href="/stack">
        Stack
      </Link>
      <Link className={`${styles.link} ${styles.press} `} href="/cv">
        CV
      </Link>
      <Link className={`${styles.link} ${styles.press} `} href="/projects">
        Projects
      </Link>
      <Link
        className={`${styles.link} ${styles.more} ${styles.press}`}
        href="/more"
      >
        More
      </Link>
    </nav>
  );
}
export default Navbar;
