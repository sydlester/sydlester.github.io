import styles from "./Creative.module.css";

export default function Creative() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img
          src={require("../assets/headers/Creative.png")}
          alt="creative"
        ></img>
      </div>
    </div>
  );
}
