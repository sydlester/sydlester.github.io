import { Component } from "react";
import { AdventureList } from "../data/adventureData";
import styles from "./CreativeProjectCard.module.css";

export class AdventureCard extends Component<AdventureList> {
  render() {
    return (
      <div className={styles.projectContainer}>
        <div className={styles.projectImage}>
          <img src={this.props.imgUrl} alt={this.props.title} />
        </div>
        <div className={styles.projectContent}>
          <span className={styles.title}>{this.props.title}</span>
          <p>{this.props.description}</p>
          <div className={styles.buttonContainer}>
            <div>See more</div>
          </div>
        </div>
      </div>
    );
  }
}
