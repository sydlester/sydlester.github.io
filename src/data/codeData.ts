import { ICON_LIST, URL_LIST } from "../const";

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
    imgUrl: ICON_LIST.starify,
    date: "2023",
    tags: ["react", "node.js", "javascript", "html/css", "oauth"],
    gitUrl: URL_LIST.starify,
  },
  {
    title: "ECOMMERCE MARKETPLACE",
    description:
      "A full-featured eCommerce site with products search, shopping cart, and purchase functions for buyer accounts, as well as inventory control, a product catalogue, and shipping management capabilities for sellers. This was my first experience building a full-stack, multi-tier application. We simulated the full software development life cycle (SDLC) from design to release, including site reliability engineering and DevOps.",
    imgUrl: ICON_LIST.miniAmazon,
    date: "2022",
    tags: ["python", "flask", "sql", "html/css"],
    gitUrl: URL_LIST.miniAmazon,
  },
];
