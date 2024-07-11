import { Component } from "react";
import { ProjectList } from "../const";
import styles from "./CodeProjectCard.module.css";

export class CodeProjectCard extends Component<ProjectList> {
  render() {
    return (
      <div className={styles.projectContainer}>
        <div className={styles.projectImage}>
          <img src={this.props.imgUrl} alt={this.props.title} />
        </div>
        <div className={styles.projectContent}>
          <span className={styles.title}>{this.props.title}</span>
          <span className={styles.dates}>{this.props.date}</span>
          <div className={styles.tags}>
            {this.props.tags.map((tag) => (
              <div className={styles.tag}>{tag.toUpperCase()}</div>
            ))}
          </div>
          <p>{this.props.description}</p>
          <div className={styles.buttonContainer}>
            <a href={this.props.gitUrl}>GITHUB REPO</a>
          </div>
        </div>
      </div>
    );
  }
}
