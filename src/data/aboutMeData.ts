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
    description:
      "Curriculum in Architecture, Data Structures, Algorithm Design & Analysis, Discrete Mathematics, Machine Learning & Data Science, Databases, Cryptography & Security",
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
    description:
      "Studied the effects of recreational beach usage on the nesting behavior of wild sea turtles with a multi-disciplinary team, by collecting and analyzing data.",
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
    subtitle: "",
    description:
      "I am the president of Duke's club ski and snowboard team. We travel across the east coast to compete in freestyle and alpine competition.",
    imgUrl: ICON_LIST.ski,
    organizationUrl: "https://www.instagram.com/dukeskiandboard/?hl=en",
  },
  {
    title: "Duke Chronicle",
    subtitle: "",
    description:
      "I am a staff photographer for The Chronicle, Duke's independent student newspaper, where I primarily cover Duke athletics and sporting events.",
    imgUrl: ICON_LIST.chronicle,
    organizationUrl: "https://www.dukechronicle.com/staff/sydney-lester",
  },
  {
    title: "DTech",
    subtitle: "",
    description:
      "I am a member of DTech, a program offering mentorship, professional development opportunities, and community for women in tech at Duke.",
    imgUrl: ICON_LIST.dtech,
    organizationUrl: "https://dtech.duke.edu/about/",
  },
  {
    title: "WXDU Campus Radio",
    subtitle: "",
    description:
      "I host a weekly radio show on WXDU, Duke's campus radio station, highlighting the work of local and independent artists.",
    imgUrl: ICON_LIST.wxdu,
    organizationUrl: "https://wxdu.org/plmanager/world/djplaylists.php?id=799",
  },
  {
    title: "Sport Clubs Exec Board",
    subtitle: "",
    description:
      "I serve as the secretary of the Duke Sport Clubs Exec Board, which oversees the funding and operations of Duke's 32 sport clubs.",
    imgUrl: ICON_LIST.duke,
    organizationUrl: "https://recreation.duke.edu/programs/sport-clubs/",
  },
];
