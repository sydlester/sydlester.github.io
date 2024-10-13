import { ICON_LIST } from "../const";

export interface AdventureList {
  title: string;
  description: string;
  imgUrl: string;
  page: string;
}

export const adventureList: AdventureList[] = [
  {
    title: "DUKE SKI & BOARD",
    description:
      "In addition to my responsibilities as president of club ski & board, I have been competing in freestyle snowboarding since I was a sophomore. Throughout the winter, we travel across the southeast to compete in USCSA competitions. I finished 4th and 7th in the Southeast division for women’s freestyle snowboarding the last two seasons, and finished in the top 10 in the Mid-Atlantic region last season. ",
    imgUrl: ICON_LIST.ski2,
    page: "Ski",
  },
  {
    title: "NEW ZEALAND",
    description:
      "I spent my 2023 fall semester studying abroad at the University of Otago in Dunedin, New Zealand. With penguin colonies literally 15 minutes from campus, I was able to study environmental sciences hands-on in ecosystems that I would never have access to in North Carolina. Additionally, I got to join Otago’s ski club for a bonus Southern Hemisphere ski season. When I wasn’t on the ski slopes or studying New Zealand’s endemic species, I was on backpacking trips exploring the Southern Alps.",
    imgUrl: ICON_LIST.nz,
    page: "NewZealand",
  },
  {
    title: "CAMERON CRAZIES",
    description: "Description",
    imgUrl: ICON_LIST.duke2,
    page: "Duke",
  },
];
