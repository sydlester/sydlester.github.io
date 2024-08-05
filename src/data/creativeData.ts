import { URL_LIST } from "../const";

export interface CreativeProjectList {
  title: string;
  description: string;
  imgUrl: string;
  redirectUrl: string;
}

export const creativeProjectList: CreativeProjectList[] = [
  {
    title: "DUKE CHRONICLE",
    description: "Description",
    imgUrl: URL_LIST.noImage,
    redirectUrl: "",
  },
  {
    title: "VISUAL ARTS",
    description: "Description",
    imgUrl: URL_LIST.noImage,
    redirectUrl: "",
  },
  {
    title: "WXDU RADIO DJ",
    description: "Description",
    imgUrl: URL_LIST.noImage,
    redirectUrl: "",
  },
];
