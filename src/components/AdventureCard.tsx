import { Component } from "react";
import { AdventureList } from "../data/adventureData";
import styles from "./AdventureCard.module.css";

export class AdventureCard extends Component<AdventureList> {
  render() {
    return (
      <div className={styles.projectContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.projectImage}>
            <img src={this.props.imgUrl} alt={this.props.title} />
          </div>
        </div>
        <div className={styles.titleContainer}>
          <span className={styles.title}>{this.props.title}</span>
        </div>
        <div className={styles.descriptionContainer}>
          <p>{this.props.description}</p>
          <div className={styles.buttonContainer}>
            <div className={styles.button}>SEE MORE</div>
          </div>
        </div>
      </div>
    );
  }
}
