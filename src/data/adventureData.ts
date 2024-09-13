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
    description: "Description",
    imgUrl: ICON_LIST.ski2,
    page: "Ski",
  },
  {
    title: "NEW ZEALAND",
    description: "Description",
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
