import { Component } from "react";
import { CreativeProjectList } from "../data/creativeData";
import styles from "./CreativeProjectCard.module.css";

interface CreativeProjectCardProps {
  content: CreativeProjectList;
  onSeeMore?: () => void;
}

export class CreativeProjectCard extends Component<CreativeProjectCardProps> {
  render() {
    return (
      <div className={styles.projectContainer}>
        <div className={styles.projectImage}>
          <img src={this.props.content.imgUrl} alt={this.props.content.title} />
        </div>
        <div className={styles.projectContent}>
          <span className={styles.title}>{this.props.content.title}</span>
          <p>{this.props.content.description}</p>
          {this.props.onSeeMore && (
            <div className={styles.seeMore} onClick={this.props.onSeeMore}>
              see more...
            </div>
          )}
        </div>
      </div>
    );
  }
}
