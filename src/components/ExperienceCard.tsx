import { Component } from "react";
import styles from "./ExperienceCard.module.css";
import { ExperienceList } from "../data/aboutMeData";

export interface ExperienceCardProps {
  content: ExperienceList;
  onReadMore: () => void;
}

export class ExperienceCard extends Component<ExperienceCardProps> {
  img = require(`../${this.props.content.imgUrl}`);
  render() {
    return (
      <div className={styles.experienceContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.experienceImage}>
            <img src={this.img} alt={this.props.content.title} />
          </div>
        </div>
        <div className={styles.titleContainer}>
          <span className={styles.title}>{this.props.content.title}</span>
          <div className={styles.subtitle}>{this.props.content.subtitle}</div>
        </div>
        <div className={styles.descriptionContainer}>
          <span className={styles.description}>
            {this.props.content.description}
          </span>
          <span className={styles.readMore} onClick={this.props.onReadMore}>
            ...read more
          </span>
        </div>
      </div>
    );
  }
}
