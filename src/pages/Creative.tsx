import styles from "./Creative.module.css";
import { creativeProjectList } from "../const";
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
      <CreativeProjectCard {...creativeProjectList[0]} />
      <CreativeProjectCard {...creativeProjectList[1]} />
      <CreativeProjectCard {...creativeProjectList[2]} />
    </div>
  );
}
