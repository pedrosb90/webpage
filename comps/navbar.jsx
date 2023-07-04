import Link from "next/link";
import styles from "../styles/navbar.module.css";
import { useRouter } from "next/router";

function Navbar({ children }) {
  const router = useRouter();

  const isRouteSelected = (route) => {
    return router.pathname === route
      ? `${styles.link} ${styles.press} ${styles.selected}`
      : `${styles.link} ${styles.press}`;
  };
  return (
    <nav className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.mainTitle}> Pedro Strauch</h1>
        <h2 className={styles.title}> Full Stack Developer </h2>
      </div>
      <Link className={isRouteSelected("/bio")} href="/bio">
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
        href="/"
      >
        Home
      </Link>
    </nav>
  );
}
export default Navbar;
