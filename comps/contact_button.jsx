import Link from "next/link";
import Button from "../comps/button";

function Contact_button() {
  return (
    <Link href="/contact">
      {" "}
      <Button>Cotizar</Button>{" "}
    </Link>
  );
}

export default Contact_button;
