import { Component } from "react";
import { CreativeProjectList } from "../data/creativeData";
import styles from "./CreativeProjectCard.module.css";

export class CreativeProjectCard extends Component<CreativeProjectList> {
  img = require(`../${this.props.imgUrl}`);
  render() {
    return (
      <div className={styles.projectContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.projectImage}>
            <img src={this.img} alt={this.props.title} />
          </div>
        </div>
        <div className={styles.titleContainer}>
          <div className={styles.title}>{this.props.title}</div>
          <div className={styles.subtitle}>{this.props.subtitle}</div>
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>{this.props.description}</p>
          <div className={styles.buttonContainer}>
            {this.props.page && (
              <div
                className={styles.button}
                role="button"
                onClick={() => window.open(this.props.page)}
              >
                HIGHLIGHTS
              </div>
            )}
            {this.props.externalUrl && (
              <div
                className={styles.button}
                role="button"
                onClick={() => window.open(this.props.externalUrl)}
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
