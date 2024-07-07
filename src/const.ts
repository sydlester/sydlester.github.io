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
];
