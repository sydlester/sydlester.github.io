import { Component } from "react";
import { AdventureList } from "../data/adventureData";
import { NavLink } from "react-router-dom";
import styles from "./AdventureCard.module.css";

export class AdventureCard extends Component<AdventureList> {
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
          <span className={styles.title}>{this.props.title}</span>
        </div>
        <div className={styles.descriptionContainer}>
          <p>{this.props.description}</p>
          <div className={styles.buttonContainer}>
            <NavLink
              className={styles.button}
              to={`/Adventure/${this.props.page}`}
            >
              SEE MORE
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
