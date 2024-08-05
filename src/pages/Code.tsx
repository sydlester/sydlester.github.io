import styles from "./Code.module.css";
import { CodeProjectCard } from "../components/CodeProjectCard";
import { codeProjectList } from "../data/codeData";

export default function Code() {
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.header}>
          <img
            src={require("../assets/headers/CodingProjects.png")}
            alt="coding projects"
          ></img>
        </div>
        <CodeProjectCard {...codeProjectList[0]} />
        <CodeProjectCard {...codeProjectList[1]} />
      </div>
    </div>
  );
}
