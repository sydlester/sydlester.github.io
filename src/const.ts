export const URL_LIST = {
  noImage: "/no-image.webp",
  resume: "/Sydney-Lester-Resume.pdf",
  github: "https://github.com/sydlester",
  linkedIn: "https://linkedin.com/in/sydneylester31",
};

export interface ExperienceList {
  title: string;
  description: string;
  imgUrl: string;
}
export const experienceList: ExperienceList[] = [
  {
    title: "Duke University",
    description: "Some description",
    imgUrl: URL_LIST.noImage,
  },
  {
    title: "Software Engineering Intern",
    description: "Some description",
    imgUrl: URL_LIST.noImage,
  },
  {
    title: "Teaching Assistant",
    description: "Some description",
    imgUrl: URL_LIST.noImage,
  },
  {
    title: "Research Intern",
    description: "Some description",
    imgUrl: URL_LIST.noImage,
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
    imgUrl: URL_LIST.noImage,
    organizationUrl: "https://www.google.com",
  },
  {
    title: "Duke Chronicle",
    description: "Some description",
    imgUrl: URL_LIST.noImage,
    organizationUrl: "https://www.google.com",
  },
  {
    title: "DTech",
    description: "Some description",
    imgUrl: URL_LIST.noImage,
    organizationUrl: "https://www.google.com",
  },
  {
    title: "WXDU Campus Radio",
    description: "Some description",
    imgUrl: URL_LIST.noImage,
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

export interface ProjectList {
  title: string;
  description: string;
  imgUrl: string;
  date: string;
  tags: string[];
  gitUrl: string;
}

export const codeProjectList: ProjectList[] = [
  {
    title: "STARIFY",
    description: "Some description",
    imgUrl: URL_LIST.noImage,
    date: "2023",
    tags: ["react", "typescript", "css"],
    gitUrl: "",
  },
  {
    title: "ECOMMERCE MARKETPLACE",
    description: "Some description",
    imgUrl: URL_LIST.noImage,
    date: "2022",
    tags: ["react", "typescript", "css"],
    gitUrl: "",
  },
];
