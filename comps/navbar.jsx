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
  const isRouteSelectedHome = (route) => {
    return router.pathname === route
      ? `${styles.link} ${styles.press} ${styles.selected}`
      : `${styles.link} ${styles.more} ${styles.press}`;
  };
  return (
    <nav className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.mainTitle}> Pedro Strauch</h1>
        {/* <h2 className={styles.title}> Product Designer</h2> */}
        <h5 className={styles.subTitles}>PRODUCT DESIGNER</h5>
      </div>
      <Link className={isRouteSelectedHome("/")} href="/">
        Home
      </Link>
      <Link className={isRouteSelected("/background")} href="/background">
        Services{" "}
      </Link>
      <Link className={isRouteSelected("/stack")} href="/stack">
        Stack
      </Link>
      <Link className={isRouteSelected("/cv")} href="/cv">
        CV
      </Link>
      <Link className={isRouteSelected("/projects")} href="/projects">
        Projects
      </Link>
      <Link className={isRouteSelected("/contact")} href="/contact">
        Contact{" "}
      </Link>
    </nav>
  );
}
export default Navbar;
