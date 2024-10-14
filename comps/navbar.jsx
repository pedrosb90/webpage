import Link from "next/link";
import styles from "../styles/navbar.module.css";
import { useRouter } from "next/router";
import { useMenu } from "./menuContext";

function Navbar({ children }) {
  const router = useRouter();
  const { menuOpen } = useMenu();

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
    <div>
      <nav className={styles.container}>
        <div className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
          <Link className={isRouteSelectedHome("/")} href="/">
            Home
          </Link>
          <Link className={isRouteSelected("/cv")} href="/cv">
            About
          </Link>
          <Link className={isRouteSelected("/background")} href="/background">
            Services{" "}
          </Link>
          <Link className={isRouteSelected("/stack")} href="/stack">
            Toolbox{" "}
          </Link>

          <Link className={isRouteSelected("/projects")} href="/projects">
            Projects
          </Link>
          <Link className={isRouteSelected("/contact")} href="/contact">
            Contact{" "}
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
