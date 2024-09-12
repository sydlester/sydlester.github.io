import { DescriptionBox } from "../../components/DescriptionBox";
import { CaptionedImage } from "../../components/CaptionedImage";
import styles from "./imagePage.module.css";
import { ICON_LIST } from "../../const";

const testData = [
  {
    imgUrl: ICON_LIST.chronicle2,
    alt: "chronicle2",
    caption: "Test Caption",
  },
];

export default function Ski() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>CLUB SKI & SNOWBOARD</h1>
      </div>
      <DescriptionBox description="description" />
      <div className={styles.images}>
        <CaptionedImage
          imgUrl={testData[0].imgUrl}
          alt={testData[0].alt}
          caption={testData[0].caption}
        />
      </div>
    </div>
  );
}
