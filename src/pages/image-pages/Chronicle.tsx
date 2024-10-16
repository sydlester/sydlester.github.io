import { DescriptionBox } from "../../components/DescriptionBox";
import { CaptionedImage } from "../../components/CaptionedImage";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "./imagePage.module.css";

const chronData = [
  {
    imgUrl: "images/chronicle/20221231_MBBvsFSU_10.png",
    alt: "chronicle3",
    caption: "Jon Scheyer at Duke vs. FSU",
  },
  {
    imgUrl: "images/chronicle/20230223_WBBvsNCSU_2.png",
    alt: "Duke WBB",
    caption: "Reigan Richardson vs. NCSU",
  },
  {
    imgUrl: "images/chronicle/20230228_MBBvsNCState_1.png",
    alt: "Jeremy Roach",
    caption: "Jeremy Roach vs. NCSU",
  },
  {
    imgUrl: "images/chronicle/20230228_MBBvsNCState_11.png",
    alt: "Tyrese Proctor",
    caption: "Tyrese Proctor & Cameron Crazies",
  },
  {
    imgUrl: "images/chronicle/20240207_MBBvsND_14.png",
    alt: "Mark Mitchell",
    caption: "Mark Mitchell vs. Notre Dame",
  },
  {
    imgUrl: "images/chronicle/20240212_MBBvsWF_1.png",
    alt: "Flip",
    caption: "Kyle Filipowski vs. Wake Forest",
  },
  {
    imgUrl: "images/chronicle/20240212_MBBvsWF_10.png",
    alt: "Jeremy Roach",
    caption: "Jeremy Roach vs. Wake Forest",
  },
  {
    imgUrl: "images/chronicle/20240212_MBBvsWF_14.png",
    alt: "McCain",
    caption: "Jared McCain vs. Wake Forest",
  },
  {
    imgUrl: "images/chronicle/20240212_MBBvsWF.png",
    alt: "McCain",
    caption: "Jared McCain vs. Wake Forest",
  },
];

export default function Chronicle() {
  return (
    <div className={styles.wrapper}>
      <DescriptionBox
        title="DUKE CHRONICLE"
        description="I've learned a lot of lessons as a sports photographer, since it's such a hit-or-miss creative art. Particularly with basketball being a fast paced sport, I’ve unexpectedly had to learn how to predict the players’ next moves, otherwise I'll miss front page-worthy shots. Duke Chronicle has been an incredible opportunity to explore photo journalism (particularly as a college basketball fan). Where else could I find myself chatting with ESPN reporters in the press room and sitting on the court at Cameron Indoor Stadium?"
      />
      <div className={styles.imageWrapper}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 1000: 3 }}
        >
          <Masonry gutter="40px">
            {chronData.map((img) => (
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
