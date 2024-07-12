import styles from "./ImagePopUp.module.css";
import { ImgPopUpList } from "../const";

interface ImagePopUpProps {
  content: ImgPopUpList;
  onClose: () => void;
}

const ImagePopUp = ({ content, onClose }: ImagePopUpProps) => {
  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <div className={styles.close} onClick={onClose}>
          <img src={require("../assets/UI/X.png")} alt="close" />
        </div>
        <div className={styles.innerContainer}>
          <div className={styles.title}>{content.img}</div>
          <div className={styles.description}>{content.text}</div>
        </div>
      </div>
    </div>
  );
};

export default ImagePopUp;
