import bgstyle from "../styles/landingItems.module.css";

const StructureLay = ({ children }) => {
  return (
    <div>
      <main className={`${bgstyle.container} `}>{children}</main>
    </div>
  );
};

export default StructureLay;
