import Link from "next/link";
import Button from "../comps/button";
import styles from "../styles/contactButton.module.css";

const handleClick = () => {
  alert("button clicked!");
};
function Contact_button() {
  return (
    <Link href="/contact">
      {" "}
      <Button className={styles.button} onClick={handleClick}>
        Contact Now
      </Button>{" "}
    </Link>
  );
}

export default Contact_button;
