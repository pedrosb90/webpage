import Link from "next/link";
import styles from "../styles/navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.container}>
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
      <Link className={styles.link} href="/more">
        More
      </Link>
    </nav>
  );
}
export default Navbar;
