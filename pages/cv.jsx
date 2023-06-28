import { Document, Page } from "react-pdf";
import Image from "next/image";
import myCv1 from "../public/cvrefp1.jpg";
import myCv2 from "../public/cvrefp2.jpg";

function Cv() {
  return (
    <div>
      {" "}
      <Image src={myCv1} width={1500} alt="CV Page 1" layout="responsive" />
      <Image src={myCv2} width={1500} alt="CV Page 2" layout="responsive" />
    </div>
  );
}

export default Cv;
