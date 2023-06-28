import { Document, Page } from "react-pdf";
import Image from "next/legacy/image";
import myCv1 from "../public/cvrefp1.jpg";
import myCv2 from "../public/cvrefp2.jpg";

function Cv() {
  return (
    <div>
      {" "}
      <Image
        src={myCv1}
        width={1270}
        height={1900}
        alt="CV Page 1"
        layout="responsive"
      />
      <Image
        src={myCv2}
        width={1270}
        height={1900}
        alt="CV Page 2"
        layout="responsive"
      />
    </div>
  );
}

export default Cv;
