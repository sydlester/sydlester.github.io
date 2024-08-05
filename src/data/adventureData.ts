import { URL_LIST } from "../const";

export interface AdventureList {
  title: string;
  description: string;
  imgUrl: string;
}

export const adventureList: AdventureList[] = [
  {
    title: "DUKE SKI & BOARD",
    description: "Description",
    imgUrl: URL_LIST.noImage,
  },
  {
    title: "NEW ZEALAND",
    description: "Description",
    imgUrl: URL_LIST.noImage,
  },
  {
    title: "CAMERON CRAZIES",
    description: "Description",
    imgUrl: URL_LIST.noImage,
  },
];
