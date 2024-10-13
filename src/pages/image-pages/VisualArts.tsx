import { DescriptionBox } from "../../components/DescriptionBox";
import { CaptionedImage } from "../../components/CaptionedImage";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "./imagePage.module.css";

const artData = [
  {
    // 3:2
    imgUrl: "images/art/Angel_Statue_Drawing.png",
    alt: "Angel Statue",
    caption: 'Angel Statue, 12"x18" Colored Pencil Drawing',
  },
  {
    // 5:6
    imgUrl: "images/art/Arctic_Monkeys_Poster.png",
    alt: "Arctic Monkeys Concert Poster",
    caption: 'Arctic Monkeys Concert Poster, 10"x12" Colored Pencil Drawing',
  },
  // 1:1
  {
    imgUrl: "images/art/Blue_Devil_Sticker.png",
    alt: "Blue Devil Sticker",
    caption: "Blue Devil Snowboard Sticker, Club Ski & Board Merch, Digital",
  },
  {
    // 2:3
    imgUrl: "images/art/Blue_Portrait.png",
    alt: "Blue Portrait",
    caption: 'Blue Portait, 12"x18" Colored Pencil Drawing',
  },
  {
    // 2:3
    imgUrl: "images/art/Melting_Portrait.png",
    alt: "Melting Portrait",
    caption: 'Melting Portrait, 10"x15" Painting',
  },
  {
    // 1:2
    imgUrl: "images/art/Pike_Table.png",
    alt: "Pike Table",
    caption: "Table Mural, 4'x8' Acrylic Painting Commission",
  },
  {
    // 4:3
    imgUrl: "images/art/Pineapple_TV_Drawing.png",
    alt: "Pinapple TV",
    caption: 'Pineapple TV, 18"x24" Colored Pencil Drawing',
  },
  {
    // 7:5
    imgUrl: "images/art/Sketchbook_0.png",
    alt: "Sketchbook 0",
    caption: "Sketchbook Spread, Colored Pencil",
  },
  {
    // 5:7
    imgUrl: "images/art/Sketchbook_1.png",
    alt: "Sketchbook 1",
    caption: "Sketchbook Page, Colored Pencil",
  },
  {
    // 5:7
    imgUrl: "images/art/Ski_Shirt.png",
    alt: "Ski Shirt",
    caption: "Club Ski & Board T-Shirt Design, Digital",
  },
  {
    // 2:3
    imgUrl: "images/art/Stained_Glass_Portrait.png",
    alt: "Stained Glass",
    caption: 'Stained Glass Portrait, 12"x18" Colored Pencil Drawing',
  },
  {
    // 2:5
    imgUrl: "images/art/Table.png",
    alt: "Table",
    caption: "Table Mural, 2.5'x6' Acrylic Painting Commission",
  },
];

export default function VisualArts() {
  return (
    <div className={styles.wrapper}>
      <DescriptionBox
        title="VISUAL ARTS"
        description="It can be hard to find time to sit down and draw these days. As a busy student, I’ve had to get creative in how I work art into my day-to-day schedule. Whether it’s creating digital assets for coding projects (including all of the UI and icons for this website!) or working on crochet projects while I watch review videos for upcoming exams, I enjoy pretty much any form of visual creative expression. The work featured below includes a little bit of everything: samples from my AP drawing portfolio, merch designs for club ski, tables I’ve painted as gifts for friends, and my most recent endeavor—crochet!"
      />
      <div className={styles.imageWrapper}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 1000: 3 }}
        >
          <Masonry gutter="40px">
            {artData.map((img) => (
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
