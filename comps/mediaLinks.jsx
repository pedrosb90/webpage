import Image from "next/legacy/image";
import Reactlogo from "../public/Reactlogo.png";
import Shopifylogo from "../public/shopilogo.png";
import Webflowlogo from "../public/webflow.png";
import layouts from "../styles/mediaLinks.module.css";
function MediaLinks() {
  return (
    <div className={layouts.style}>
      {" "}
      <Image alt="Reactlogo" src={Reactlogo} height={40} width={140} />
      <Image alt="Shopifylogo" src={Shopifylogo} height={40} width={160} />
      <Image alt="Webflowlogo" src={Webflowlogo} height={40} width={160} />
    </div>
  );
}

export default MediaLinks;
