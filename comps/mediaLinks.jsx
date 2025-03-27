import Image from "next/legacy/image";
import Reactlogo from "../public/Reactlogo.png";
import Shopifylogo from "../public/shopilogo.png";
import Webflowlogo from "../public/webflow.png";
import layouts from "../styles/mediaLinks.module.css";

function MediaLinks() {
  return (
    <div className={layouts.style}>
      {" "}
      <Image alt="Reactlogo" src={Reactlogo} height={50} width={170} />
      <Image alt="Shopifylogo" src={Shopifylogo} height={50} width={200} />
      <Image alt="Webflowlogo" src={Webflowlogo} height={50} width={200} />
    </div>
  );
}

export default MediaLinks;
