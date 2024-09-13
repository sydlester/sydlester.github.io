import { DescriptionBox } from "../../components/DescriptionBox";
import { CaptionedImage } from "../../components/CaptionedImage";
import styles from "./imagePage.module.css";
import { ICON_LIST } from "../../const";

const testData = [
  {
    imgUrl: ICON_LIST.wxdu2,
    alt: "wxdu2",
    caption: "Test Caption",
  },
];

export default function NewZealand() {
  return (
    <div className={styles.wrapper}>
      <DescriptionBox title="NEW ZEALAND" description="description" />
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
