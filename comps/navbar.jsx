import Link from "next/link";
import styles from "../styles/navbar.module.css";
import shopi from "../public/shopilogo.png";
import Image from "next/image";
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
            Servicios
          </Link>
          <Link
            className={isRouteSelected("/background")}
            onClick={toggleMenu}
            href="/background"
          >
            Experiencia{" "}
          </Link>
          {/* <Link
            className={isRouteSelected("/cv")}
            onClick={toggleMenu}
            href="/cv"
          >
            About
          </Link> */}

          <Link
            className={isRouteSelected("/stack")}
            onClick={toggleMenu}
            href="/stack"
          >
            Tech Stack{" "}
          </Link>
          <Link
            className={isRouteSelected("/projects")}
            onClick={toggleMenu}
            href="/projects"
          >
            Proyectos
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
      {/* <div className={styles.logos}>
        {" "}
        <Image
          src={shopi}
          border-radius={15}
          height={35}
          alt="Shopi Logo"
          style={{ marginLeft: "180px" }}
        />
       
      </div> */}
    </div>
  );
}

export default Navbar;
