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
    description:
      "Held office hours, graded assignments, and assisted in developing TA training materials for concepts including logic, proofs, combinatorics, and graph theory.",
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
  {
    title: "Sport Clubs Exec Board",
    subtitle: "Some subtitle",
    description: "Some description",
    imgUrl: ICON_LIST.duke,
    organizationUrl: "https://recreation.duke.edu/programs/sport-clubs/",
  },
];
