import { DescriptionBox } from "../../components/DescriptionBox";
// import { CaptionedImage } from "../../components/CaptionedImage";
import styles from "./imagePage.module.css";
// import { ICON_LIST } from "../../const";

// const testData = [
//   {
//     imgUrl: ICON_LIST.chronicle2,
//     alt: "chronicle2",
//     caption: "Test Caption",
//   },
// ];

export default function Duke() {
  return (
    <div className={styles.wrapper}>
      <DescriptionBox
        title="DUKE BASKETBALL"
        description="Chronicle description"
      />
      <div className={styles.images}>
        {/* <CaptionedImage
          imgUrl={testData[0].imgUrl}
          alt={testData[0].alt}
          caption={testData[0].caption}
        /> */}
      </div>
    </div>
  );
}
