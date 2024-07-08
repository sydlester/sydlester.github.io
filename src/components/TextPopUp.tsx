import styles from "./TextPopUp.module.css";
import { PopUpList } from "../const";

interface TextPopUpProps {
  content: PopUpList;
  onClose: () => void;
}

const TextPopUp = ({ content, onClose }: TextPopUpProps) => {
  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <div className={styles.close} onClick={onClose}>
          <img src={require("../assets/UI/X.png")} alt="close" />
        </div>
        <div className={styles.innerContainer}>
          <div className={styles.title}>{content.title}</div>
          <div className={styles.description}>{content.description}</div>
        </div>
      </div>
    </div>
  );
};

export default TextPopUp;
