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
        <div className={styles.experienceContent}>
          <span className={styles.title}>{this.props.content.title}</span>
          {/* <span className={styles.dates}>2020-2024</span> */}
          <p>{this.props.content.description}</p>
          <div className={styles.readMore} onClick={this.props.onReadMore}>
            read more...
          </div>
        </div>
      </div>
    );
  }
}
