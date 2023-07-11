import Contact_button from "../comps/contact_button";
import layout from "../styles/landingItems.module.css";
import Layout from "../comps/layout";
import Navbar from "../comps/navbar";
import MediaLinks from "../comps/mediaLinks";
// import { CldVideoPlayer } from "next-cloudinary";

export default function Home() {
  return (
    <Layout>
      <div className={layout.background}>
        <div className={`${layout.container}`}>
          <Navbar />
          {/* <CldVideoPlayer
            id="pedvid"
            src="https://youtu.be/j5lMLbswsT0"
            height={400}
            width={400}
          /> */}
          <MediaLinks />
          <Contact_button />
        </div>
      </div>
    </Layout>
  );
}
