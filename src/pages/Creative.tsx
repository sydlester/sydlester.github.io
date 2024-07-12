import styles from "./Creative.module.css";
import { creativeProjectList, ImgPopUpList, imgPopUpList } from "../const";
import { useState } from "react";
import { CreativeProjectCard } from "../components/CreativeProjectCard";
import ImagePopUp from "../components/ImagePopUp";

export default function Creative() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpProps, setPopUpProps] = useState<ImgPopUpList>({
    img: "",
    text: "",
  });

  const handleShowPopUp = () => {
    setShowPopUp(!showPopUp);
  };

  const handlePopUp = (props: ImgPopUpList) => {
    setPopUpProps(props);
    handleShowPopUp();
  };
  return (
    <div className={styles.wrapper}>
      {showPopUp && (
        <ImagePopUp content={popUpProps} onClose={handleShowPopUp} />
      )}
      <div className={styles.header}>
        <img
          src={require("../assets/headers/Creative.png")}
          alt="creative"
        ></img>
      </div>
      <CreativeProjectCard
        content={creativeProjectList[0]}
        onSeeMore={() => handlePopUp(imgPopUpList[0])}
      />
      <CreativeProjectCard
        content={creativeProjectList[1]}
        onSeeMore={() => handlePopUp(imgPopUpList[1])}
      />
      <CreativeProjectCard content={creativeProjectList[2]} />
    </div>
  );
}
