import { ICON_LIST } from "../const";

export interface ExperienceList {
  title: string;
  subtitle: string;
  description: string;
  imgUrl: string;
}
export const experienceList: ExperienceList[] = [
  {
    title: "Duke University",
    subtitle: "B.S. Computer Science, 2025",
    description: "Some description",
    imgUrl: ICON_LIST.duke,
  },
  {
    title: "Software Engineering Intern",
    subtitle: "Blooket, May 2024 - Ongoing",
    description: "Some description",
    imgUrl: ICON_LIST.blooket,
  },
  {
    title: "Teaching Assistant",
    subtitle: "Discrete Math for CS, Spring 2024",
    description: "Some description",
    imgUrl: ICON_LIST.teaching,
  },
  {
    title: "Research Intern",
    subtitle: "DukeEngage Marine Lab, Summer 2022",
    description: "Some description",
    imgUrl: ICON_LIST.research,
  },
];

export interface LeadershipList {
  title: string;
  subtitle: string;
  description: string;
  imgUrl: string;
  organizationUrl: string;
}
export const leadershipList: LeadershipList[] = [
  {
    title: "Duke Ski & Board",
    subtitle: "Some subtitle",
    description: "Some description",
    imgUrl: ICON_LIST.ski,
    organizationUrl: "https://www.google.com",
  },
  {
    title: "Duke Chronicle",
    subtitle: "Some subtitle",
    description: "Some description",
    imgUrl: ICON_LIST.chronicle,
    organizationUrl: "https://www.google.com",
  },
  {
    title: "DTech",
    subtitle: "Some subtitle",
    description: "Some description",
    imgUrl: ICON_LIST.dtech,
    organizationUrl: "https://dtech.duke.edu/about/",
  },
  {
    title: "WXDU Campus Radio",
    subtitle: "Some subtitle",
    description: "Some description",
    imgUrl: ICON_LIST.wxdu,
    organizationUrl: "https://www.google.com",
  },
];

export interface PopUpList {
  title: string;
  subtitle: string;
  subtitle2?: string;
  description: string;
}
export const popUpList: PopUpList[] = [
  {
    title: "Duke University",
    subtitle: "B.S. Computer Science, 2025",
    description: "Longer Description",
  },
  {
    title: "Software Engineering Intern",
    subtitle: "Blooket, May 2024 - Ongoing",
    description: "Longer Description",
  },
  {
    title: "Teaching Assistant",
    subtitle: "Discrete Math for CS, Spring 2024",
    description: "Longer Description",
  },
  {
    title: "Research Intern",
    subtitle: "DukeEngage Marine Lab, Summer 2022",
    description: "Longer Description",
  },
  {
    title: "Duke Ski & Board",
    subtitle: "President, 2024-2025",
    subtitle2: "Equipment Chair, 2023-2024",
    description: "Longer Description",
  },
];
