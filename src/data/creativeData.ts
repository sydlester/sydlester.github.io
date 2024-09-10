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
    description:
      "Description with filler text to be replaced later. Does this fix the spacing issue? I think the two grid rows are split evenly right now. This should make the first row less tall because the fit to content height didn't work",
    imgUrl: ICON_LIST.chronicle2,
    page: "Chronicle",
    externalUrl: URL_LIST.test,
  },
  {
    title: "VISUAL ARTS",
    subtitle: "Painting & Drawing",
    description: "Description",
    imgUrl: ICON_LIST.art,
    page: "Art",
  },
  {
    title: "WXDU CAMPUS RADIO",
    subtitle: "Playlist DJ",
    description: "Description",
    imgUrl: ICON_LIST.wxdu2,
    externalUrl: URL_LIST.test,
  },
];
