import styles from "./Adventure.module.css";
import { adventureList } from "../const";
import { AdventureCard } from "../components/AdventureCard";

export default function Adventure() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img
          src={require("../assets/headers/Adventure.png")}
          alt="adventure"
        ></img>
      </div>
      <AdventureCard {...adventureList[0]} />
      <AdventureCard {...adventureList[1]} />
      <AdventureCard {...adventureList[2]} />
    </div>
  );
}
