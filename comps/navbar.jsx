import Link from "next/link";
import styles from "../styles/navbar.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import mobileMenu from "../public/newhamb.png";
import Image from "next/image";

function Navbar({ children }) {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Image
        onClick={toggleMenu}
        src={mobileMenu}
        className={styles.hamburger}
      />
      <nav className={styles.container}>
        <div className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
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
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
