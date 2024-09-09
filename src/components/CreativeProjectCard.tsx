import { Component } from "react";
import { CreativeProjectList } from "../data/creativeData";
import styles from "./CreativeProjectCard.module.css";

interface CreativeProjectCardProps {
  content: CreativeProjectList;
}

export class CreativeProjectCard extends Component<CreativeProjectCardProps> {
  img = require(`../${this.props.content.imgUrl}`);
  render() {
    return (
      <div className={styles.projectContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.projectImage}>
            <img src={this.img} alt={this.props.content.title} />
          </div>
        </div>
        <div className={styles.titleContainer}>
          <div className={styles.title}>{this.props.content.title}</div>
          <div className={styles.subtitle}>{this.props.content.subtitle}</div>
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>{this.props.content.description}</p>
          <div className={styles.buttonContainer}>
            {this.props.content.page && (
              <div
                className={styles.button}
                role="button"
                onClick={() => window.open(this.props.content.page)}
              >
                HIGHLIGHTS
              </div>
            )}
            {this.props.content.externalUrl && (
              <div
                className={styles.button}
                role="button"
                onClick={() => window.open(this.props.content.externalUrl)}
              >
                PUBLISHED
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
