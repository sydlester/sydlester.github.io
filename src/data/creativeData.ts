import { ICON_LIST, URL_LIST } from "../const";

export interface CreativeProjectList {
  title: string;
  subtitle: string;
  description: string;
  imgUrl: string;
  page?: string;
  externalUrl?: string;
}

export const creativeProjectList: CreativeProjectList[] = [
  {
    title: "DUKE CHRONICLE",
    subtitle: "Staff Photographer",
    description: "Description",
    imgUrl: ICON_LIST.chronicle2,
    page: "/#/",
    externalUrl: URL_LIST.test,
  },
  {
    title: "VISUAL ARTS",
    subtitle: "Painting & Drawing",
    description: "Description",
    imgUrl: ICON_LIST.art,
    page: "/#/",
  },
  {
    title: "WXDU CAMPUS RADIO",
    subtitle: "Weekly Playlist DJ",
    description: "Description",
    imgUrl: ICON_LIST.wxdu2,
    externalUrl: URL_LIST.test,
  },
];
