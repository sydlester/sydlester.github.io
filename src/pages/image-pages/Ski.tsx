import { DescriptionBox } from "../../components/DescriptionBox";
import { CaptionedImage } from "../../components/CaptionedImage";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "./imagePage.module.css";

const skiData = [
  {
    imgUrl: "images/ski/Ski_Beech.png",
    alt: "Beech Mountain",
    caption: "Test Caption",
  },
  {
    imgUrl: "images/ski/Ski_Training.png",
    alt: "Race Training",
    caption: "Test Caption",
  },
  {
    imgUrl: "images/ski/Ski_Palisades.png",
    alt: "Palisades Tahoe",
    caption: "Test Caption",
  },
  {
    imgUrl: "images/ski/Ski_RailJam.png",
    alt: "Rail Jam",
    caption: "Test Caption",
  },
  {
    imgUrl: "images/ski/Ski_HeelGrab.png",
    alt: "Remarkables",
    caption: "Test Caption",
  },
  {
    imgUrl: "images/ski/Ski_Fall.png",
    alt: "me falling lol",
    caption: "Test Caption",
  },
  {
    imgUrl: "images/ski/Ski_SunValley.png",
    alt: "Sun Valley",
    caption: "Test Caption",
  },
  {
    imgUrl: "images/ski/Ski_Coronet.png",
    alt: "Coronet Peak",
    caption: "Test Caption",
  },
  {
    imgUrl: "images/ski/Ski_Banff.png",
    alt: "Banff Sunshine",
    caption: "Test Caption",
  },
  // {
  //   imgUrl: "images/ski/Ski_Wintergreen.png",
  //   alt: "Wintergreen",
  //   caption: "Test Caption",
  // },
];

export default function Ski() {
  return (
    <div className={styles.wrapper}>
      <DescriptionBox title="CLUB SKI & SNOWBOARD" description="description" />
      <div className={styles.imageWrapper}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 1000: 3 }}
        >
          <Masonry gutter="40px">
            {skiData.map((img) => (
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
