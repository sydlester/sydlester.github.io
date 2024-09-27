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
    organizationUrl: "https://www.instagram.com/dukeskiandboard/?hl=en",
  },
  {
    title: "Duke Chronicle",
    subtitle: "Some subtitle",
    description: "Some description",
    imgUrl: ICON_LIST.chronicle,
    organizationUrl: "https://www.dukechronicle.com/staff/sydney-lester",
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
    organizationUrl: "https://wxdu.org/plmanager/world/djplaylists.php?id=799",
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
    description:
      "Held office hours to individually assist students with assignments and supplement understanding of course content including logic, proofs, combinatorics, and graph theory. Worked with a small team to develop TA training materials, write sample solutions, and guide grading policies for the proofs and inductions portion of the course. Graded assignments and examinations, and worked with the teaching team to evaluate and adjust practices throughout the course",
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
