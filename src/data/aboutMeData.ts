import { ICON_LIST } from "../const";

export interface ExperienceList {
  title: string;
  description: string;
  imgUrl: string;
}
export const experienceList: ExperienceList[] = [
  {
    title: "Duke University",
    description: "Some description",
    imgUrl: ICON_LIST.duke,
  },
  {
    title: "Software Engineering Intern",
    description: "Some description",
    imgUrl: ICON_LIST.blooket,
  },
  {
    title: "Teaching Assistant",
    description: "Some description",
    imgUrl: ICON_LIST.teaching,
  },
  {
    title: "Research Intern",
    description: "Some description",
    imgUrl: ICON_LIST.research,
  },
];

export interface LeadershipList {
  title: string;
  description: string;
  imgUrl: string;
  organizationUrl: string;
}
export const leadershipList: LeadershipList[] = [
  {
    title: "Duke Ski & Board",
    description: "Some description",
    imgUrl: ICON_LIST.ski,
    organizationUrl: "https://www.google.com",
  },
  {
    title: "Duke Chronicle",
    description: "Some description",
    imgUrl: ICON_LIST.chronicle,
    organizationUrl: "https://www.google.com",
  },
  {
    title: "DTech",
    description: "Some description",
    imgUrl: ICON_LIST.dtech,
    organizationUrl: "https://dtech.duke.edu/about/",
  },
  {
    title: "WXDU Campus Radio",
    description: "Some description",
    imgUrl: ICON_LIST.wxdu,
    organizationUrl: "https://www.google.com",
  },
];

export interface PopUpList {
  title: string;
  description: string;
}
export const popUpList: PopUpList[] = [
  {
    title: "Duke University",
    description: "Longer Description",
  },
  {
    title: "Software Engineering Intern",
    description: "Longer Description",
  },
  {
    title: "Teaching Assistant",
    description: "Longer Description",
  },
  {
    title: "Research Intern",
    description: "Longer Description",
  },
  {
    title: "Duke Ski & Board",
    description: "Longer Description",
  },
];
