import { URL_LIST } from "../const";

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
    imgUrl: URL_LIST.noImage,
    page: "Ski",
  },
  {
    title: "NEW ZEALAND",
    description: "Description",
    imgUrl: URL_LIST.noImage,
    page: "NewZealand",
  },
  {
    title: "CAMERON CRAZIES",
    description: "Description",
    imgUrl: URL_LIST.noImage,
    page: "Duke",
  },
];
