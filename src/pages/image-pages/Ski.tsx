import { DescriptionBox } from "../../components/DescriptionBox";
import { CaptionedImage } from "../../components/CaptionedImage";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "./imagePage.module.css";

const skiData = [
  {
    imgUrl: "images/ski/Ski_Beech.png",
    alt: "Beech Mountain",
    caption: "Between slopestyle runs at Beech Mountain",
  },
  {
    imgUrl: "images/ski/Ski_Training.png",
    alt: "Race Training",
    caption: "My race training group at Sun Valley",
  },
  {
    imgUrl: "images/ski/Ski_Palisades.png",
    alt: "Palisades Tahoe",
    caption: "More training out west!",
  },
  {
    imgUrl: "images/ski/Ski_RailJam.png",
    alt: "Rail Jam",
    caption: "Rail Jam at Beech Mountain",
  },
  {
    imgUrl: "images/ski/Ski_HeelGrab.png",
    alt: "Remarkables",
    caption: "My first successful tailfish grab",
  },
  {
    imgUrl: "images/ski/Ski_Fall.png",
    alt: "me falling lol",
    caption: "Sometimes you fall a lot before you land a trick",
  },
  {
    imgUrl: "images/ski/Ski_SunValley.png",
    alt: "Sun Valley",
    caption: "Sun Valley, Idaho",
  },
  {
    imgUrl: "images/ski/Ski_Coronet.png",
    alt: "Coronet Peak",
    caption: "Walking between competitions",
  },
  {
    imgUrl: "images/ski/Ski_Banff.png",
    alt: "Banff Sunshine",
    caption: "All of the sophomores training at Banff Sunshine",
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
      <DescriptionBox
        title="CLUB SKI & SNOWBOARD"
        description="I’ve had the opportunity to not only compete in my first rail jam and slopestyle competitions with Duke Ski & Board, but I’ve also been able to travel out west for training at Banff Sunshine and Sun Valley, as well as Jackson Hole coming up this year! Being from North Carolina and learning to snowboard at home, I had never had access to that kind of terrain before. From landing my first 50-50 on a rail to sending my first chute, Duke Ski & Board has been an incredible experience.
"
      />
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
