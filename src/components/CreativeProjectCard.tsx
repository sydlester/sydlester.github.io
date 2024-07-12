import { Component } from "react";
import { CreativeProjectList } from "../const";
import styles from "./CreativeProjectCard.module.css";

export class CreativeProjectCard extends Component<CreativeProjectList> {
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
            <a href={this.props.redirectUrl}>See more</a>
          </div>
        </div>
      </div>
    );
  }
}
