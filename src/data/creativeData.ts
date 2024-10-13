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
      "I am a staff photographer for the Duke Chronicle. I have covered a variety of Duke athletic events, including men’s and women’s basketball, softball, field hockey, and volleyball. I enjoy producing and editing photos in a high pressure environment—particularly basketball. You can see my favorite shots, as well as my published photos below.",
    imgUrl: ICON_LIST.chronicle2,
    page: "Chronicle",
    externalUrl: URL_LIST.chronicle,
  },
  {
    title: "VISUAL ARTS",
    subtitle: "Painting & Drawing",
    description:
      "For as long as I can remember, I’ve loved creating art. Starting with crayons as a kid, I’ve tried out pretty much every visual art medium you can think of. I enjoy the process of learning how to create in new ways, and being able to bring ideas to life with a variety of tools. You can see my favorite projects below!",
    imgUrl: ICON_LIST.art,
    page: "Art",
  },
  {
    title: "WXDU CAMPUS RADIO",
    subtitle: "Playlist DJ",
    description:
      "I host a weekly radio show at Duke’s campus radio station, WXDU. Over the last few semesters, I have explored a variety of genres represented by the thousands of CDs in WXDU’s library. Even though I’ve hosted shows featuring everything from blue grass folk artists to synth pop, I consistently play tracks that highlight local and independent artists. You can find the archive of all of my show playlists below!",
    imgUrl: ICON_LIST.wxdu2,
    externalUrl: URL_LIST.wxdu,
  },
];
