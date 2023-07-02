import Image from "next/legacy/image";
import git from "/Users/pedro/Desktop/webpage/github logoiso.png";
import linke from "/Users/pedro/Desktop/webpage/linkedin logo.png";
import layouts from "../styles/mediaLinks.module.css";

function MediaLinks() {
  return (
    <div className={layouts.container}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/pedrosb90/"
      >
        <Image
          className={`${layouts.press} ${layouts.style}`}
          alt="git"
          src={git}
          height={80}
          width={175}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/pedrostrauchbraga/"
        target="_blank"
        rel="noopener noreferrer"
        className={layouts.style}
      >
        <Image
          className={`${layouts.press} ${layouts.style}`}
          alt="linke"
          src={linke}
          height={80}
          width={90}
        />
      </a>
    </div>
  );
}

export default MediaLinks;