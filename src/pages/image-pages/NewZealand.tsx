import { DescriptionBox } from "../../components/DescriptionBox";
import { CaptionedImage } from "../../components/CaptionedImage";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "./imagePage.module.css";

const nzData = [
  {
    imgUrl: "images/newzealand/NZ_Copland.png",
    alt: "",
    caption: "",
  },
  {
    imgUrl: "images/newzealand/NZ_Aspiring.png",
    alt: "",
    caption: "",
  },
  {
    imgUrl: "images/newzealand/NZ_TrebleCone.png",
    alt: "",
    caption: "",
  },
  {
    imgUrl: "images/newzealand/NZ_Matukituki.png",
    alt: "",
    caption: "",
  },
  {
    imgUrl: "images/newzealand/NZ_OUTC.png",
    alt: "",
    caption: "",
  },
  {
    imgUrl: "images/newzealand/NZ_Milford.png",
    alt: "",
    caption: "",
  },
  {
    imgUrl: "images/newzealand/NZ_Tasman.png",
    alt: "",
    caption: "",
  },
  {
    imgUrl: "images/newzealand/NZ_Kea.png",
    alt: "",
    caption: "",
  },
  {
    imgUrl: "images/newzealand/NZ_Remarks.png",
    alt: "",
    caption: "",
  },
  // {
  //   imgUrl: "images/newzealand/NZ_Backcountry.png",
  //   alt: "",
  //   caption: "",
  // },
];

export default function NewZealand() {
  return (
    <div className={styles.wrapper}>
      <DescriptionBox title="NEW ZEALAND" description="description" />
      <div className={styles.imageWrapper}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 1000: 3 }}
        >
          <Masonry gutter="40px">
            {nzData.map((img) => (
              <CaptionedImage
                imgUrl={img.imgUrl}
                alt={img.alt}
                caption={img.caption}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}
