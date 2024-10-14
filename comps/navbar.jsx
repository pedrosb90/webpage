import Link from "next/link";
import styles from "../styles/navbar.module.css";
import { useRouter } from "next/router";
import { useMenu } from "./menuContext";

function Navbar({ children }) {
  const router = useRouter();
  const { menuOpen, toggleMenu } = useMenu();

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
          <Link
            className={isRouteSelectedHome("/")}
            onClick={toggleMenu}
            href="/"
          >
            Home
          </Link>
          <Link
            className={isRouteSelected("/cv")}
            onClick={toggleMenu}
            href="/cv"
          >
            About
          </Link>
          <Link
            className={isRouteSelected("/background")}
            onClick={toggleMenu}
            href="/background"
          >
            Services{" "}
          </Link>
          <Link
            className={isRouteSelected("/stack")}
            onClick={toggleMenu}
            href="/stack"
          >
            Toolbox{" "}
          </Link>

          <Link
            className={isRouteSelected("/projects")}
            onClick={toggleMenu}
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className={isRouteSelected("/contact")}
            onClick={toggleMenu}
            href="/contact"
          >
            Contact{" "}
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
