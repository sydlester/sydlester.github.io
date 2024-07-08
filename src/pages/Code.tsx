import styles from "./Code.module.css";
import { CodeProjectCard } from "../components/CodeProjectCard";
import { codeProjectList } from "../const";

export default function Code() {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1>CODING PROJECTS</h1>
        <CodeProjectCard {...codeProjectList[0]} />
        <CodeProjectCard {...codeProjectList[1]} />
      </div>
    </div>
  );
}
