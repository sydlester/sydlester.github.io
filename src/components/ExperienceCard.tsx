import { Component } from "react";
import styles from "./ExperienceCard.module.css";
import { URL_LIST } from "../const";

export type ExperienceCardProps = typeof ExperienceCard.defaultProps & {
  title: string;
  description: string;
  imgUrl: string;
  aboutUrl: string;
};

export class ExperienceCard extends Component<ExperienceCardProps> {
  static defaultProps = {
    imgUrl: URL_LIST.noImage,
  };

  render() {
    return (
      <div className={styles.experienceContainer}>
        <div className={styles.experienceImage}>
          <img src={this.props.imgUrl} alt={this.props.title} />
        </div>
        <div className={styles.experienceContent}>
          <span className={styles.title}>{this.props.title}</span>
          <span className={styles.dates}>2020-2024</span>
          <p>{this.props.description}</p>
          <a href={this.props.aboutUrl}>read more...</a>
        </div>
      </div>
    );
  }
}

export const mockProps = {
  ...ExperienceCard.defaultProps,
  ...({
    title: "Experience Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus, eros at efficitur tempor, ex lorem mollis nunc, eget volutpat nulla tortor a dui.",
    aboutUrl: "https://www.google.com",
  } as ExperienceCardProps),
};
