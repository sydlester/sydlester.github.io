import { DescriptionBox } from "../../components/DescriptionBox";
import { CaptionedImage } from "../../components/CaptionedImage";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "./imagePage.module.css";

const nzData = [
  {
    imgUrl: "images/newzealand/NZ_Copland.png",
    alt: "Copland",
    caption: "Backpacking on the Copland Track",
  },
  {
    imgUrl: "images/newzealand/NZ_Aspiring.png",
    alt: "Aspiring",
    caption: "Mount Aspiring, from the Liverpool Track",
  },
  {
    imgUrl: "images/newzealand/NZ_TrebleCone.png",
    alt: "",
    caption:
      "We hiked to the summit of Treble Cone, my first time snowboarding off-piste",
  },
  {
    imgUrl: "images/newzealand/NZ_Matukituki.png",
    alt: "",
    caption: "Matukituki Valley",
  },
  {
    imgUrl: "images/newzealand/NZ_OUTC.png",
    alt: "",
    caption: "Mount Cook with the Otago Hiking Club",
  },
  {
    imgUrl: "images/newzealand/NZ_Milford.png",
    alt: "",
    caption: "Milford Sound",
  },
  {
    imgUrl: "images/newzealand/NZ_Tasman.png",
    alt: "",
    caption: "Tasman Lake & Mount Cook",
  },
  {
    imgUrl: "images/newzealand/NZ_Kea.png",
    alt: "",
    caption: "Kea are more curious than my ecology class led me to believe",
  },
  {
    imgUrl: "images/newzealand/NZ_Remarks.png",
    alt: "",
    caption: "More off-piste hiking & snowboarding at The Remarkables",
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
      <DescriptionBox
        title="NEW ZEALAND"
        description="As the only Duke student in New Zealand in the fall of 2023, I got to throw myself into the University of Otago for 6 months. As one would probably expect, I spent my semester away from Duke Ski and Board roadtripping to the ski fields in Wanaka every weekend with the Otago Uni Ski and Snowboard Club. Once the snow melted, I traveled around the South Island with Otago’s hiking club, learning the ins and outs of New Zealand’s backcountry. To finish off my semester, I planned my own 9-day backpacking trip, hoping to squeeze in every mountain I hadn’t climbed yet. Unfortunately, the more time I spent hiking, the more bucket list mountains I found. I guess I’ll have to make my way back down under soon!"
      />
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
