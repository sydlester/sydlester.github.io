import styles from "./Adventure.module.css";

export default function Adventure() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img
          src={require("../assets/headers/Adventure.png")}
          alt="adventure"
        ></img>
      </div>
    </div>
  );
}
