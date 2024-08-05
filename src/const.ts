export const URL_LIST = {
  noImage: "assets/noImage.png",
  resume: "/Sydney-Lester-Resume.pdf",
  github: "https://github.com/sydlester",
  linkedIn: "https://linkedin.com/in/sydneylester31",
  duke: "assets/icons/DukeIcon.png",
  blooket: "assets/icons/BlooketIcon.png",
  teaching: "assets/icons/GraphIcon.png",
  research: "assets/icons/TurtleIcon.png",
  ski: "assets/icons/SnowboardIcon.png",
  chronicle: "assets/icons/CameraIcon.png",
  dtech: "assets/icons/TerminalIcon.png",
  wxdu: "assets/icons/CDIcon.png",
  starify: "assets/icons/SpaceIcon.png",
  miniAmazon: "assets/icons/ShoppingCartIcon.png",
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
    imgUrl: URL_LIST.duke,
  },
  {
    title: "Software Engineering Intern",
    description: "Some description",
    imgUrl: URL_LIST.blooket,
  },
  {
    title: "Teaching Assistant",
    description: "Some description",
    imgUrl: URL_LIST.teaching,
  },
  {
    title: "Research Intern",
    description: "Some description",
    imgUrl: URL_LIST.research,
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
    imgUrl: URL_LIST.ski,
    organizationUrl: "https://www.google.com",
  },
  {
    title: "Duke Chronicle",
    description: "Some description",
    imgUrl: URL_LIST.chronicle,
    organizationUrl: "https://www.google.com",
  },
  {
    title: "DTech",
    description: "Some description",
    imgUrl: URL_LIST.dtech,
    organizationUrl: "https://www.google.com",
  },
  {
    title: "WXDU Campus Radio",
    description: "Some description",
    imgUrl: URL_LIST.wxdu,
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
    description:
      "A web client application that aggregates a user’s Spotify listening data from several time periods and presents a visualization in a retro arcade game UX. Integrates Spotify's OAuth services and several data-plane APIs. All logos and icons featured in the app were hand-drawn by me!",
    imgUrl: URL_LIST.starify,
    date: "2023",
    tags: ["react", "node.js", "javascript", "html/css", "oauth"],
    gitUrl: "https://github.com/sydlester/starify-app",
  },
  {
    title: "ECOMMERCE MARKETPLACE",
    description:
      "A full-featured eCommerce site with products search, shopping cart, and purchase functions for buyer accounts, as well as inventory control, a product catalogue, and shipping management capabilities for sellers. This was my first experience building a full-stack, multi-tier application. We simulated the full software development life cycle (SDLC) from design to release, including site reliability engineering and DevOps.",
    imgUrl: URL_LIST.miniAmazon,
    date: "2022",
    tags: ["python", "flask", "sql", "html/css"],
    gitUrl: "https://github.com/sydlester/mini-amazon-cs316",
  },
];

export interface ImgPopUpList {
  img: string;
  text: string;
}

export const imgPopUpList: ImgPopUpList[] = [
  {
    img: URL_LIST.noImage,
    text: "picture 1",
  },
  {
    img: URL_LIST.noImage,
    text: "picture 2",
  },
  {
    img: URL_LIST.noImage,
    text: "picture 3",
  },
  {
    img: URL_LIST.noImage,
    text: "picture 4",
  },
];

export interface CreativeProjectList {
  title: string;
  description: string;
  imgUrl: string;
  redirectUrl: string;
}

export const creativeProjectList: CreativeProjectList[] = [
  {
    title: "DUKE CHRONICLE",
    description: "Description",
    imgUrl: URL_LIST.noImage,
    redirectUrl: "",
  },
  {
    title: "VISUAL ARTS",
    description: "Description",
    imgUrl: URL_LIST.noImage,
    redirectUrl: "",
  },
  {
    title: "WXDU RADIO DJ",
    description: "Description",
    imgUrl: URL_LIST.noImage,
    redirectUrl: "",
  },
];

export interface AdventureList {
  title: string;
  description: string;
  imgUrl: string;
}

export const adventureList: AdventureList[] = [
  {
    title: "DUKE SKI & BOARD",
    description: "Description",
    imgUrl: URL_LIST.noImage,
  },
  {
    title: "NEW ZEALAND",
    description: "Description",
    imgUrl: URL_LIST.noImage,
  },
  {
    title: "CAMERON CRAZIES",
    description: "Description",
    imgUrl: URL_LIST.noImage,
  },
];
