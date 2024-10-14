import mobileMenu from "../public/newhamb.png";
import styles from "../styles/navbar.module.css";
import Image from "next/image";
import { useMenu } from "./menuContext";

export default function Hamburger() {
  const { menuOpen, toggleMenu } = useMenu();

  return (
    <div>
      <Image
        onClick={toggleMenu}
        src={mobileMenu}
        className={styles.hamburger}
      />
    </div>
  );
}
