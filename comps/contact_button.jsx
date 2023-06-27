import Link from "next/link";
import Button from "../comps/button";

const handleClick = () => {
  alert("button clicked!");
};
function Contact_button() {
  return (
    <Link href="/contact">
      {" "}
      <Button onClick={handleClick}>Contact Now</Button>{" "}
    </Link>
  );
}

export default Contact_button;
