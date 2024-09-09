import styles from "./Creative.module.css";
import { creativeProjectList } from "../data/creativeData";
import { CreativeProjectCard } from "../components/CreativeProjectCard";

export default function Creative() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img
          src={require("../assets/headers/Creative.png")}
          alt="creative"
        ></img>
      </div>
      <CreativeProjectCard content={creativeProjectList[0]} />
      <CreativeProjectCard content={creativeProjectList[1]} />
      <CreativeProjectCard content={creativeProjectList[2]} />
    </div>
  );
}
