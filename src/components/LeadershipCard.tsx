import { Component } from "react";
import styles from "./LeadershipCard.module.css";
import { LeadershipList } from "../data/aboutMeData";

interface LeadershipCardProps {
  content: LeadershipList;
  onReadMore?: () => void;
}

export class LeadershipCard extends Component<LeadershipCardProps> {
  img = require(`../${this.props.content.imgUrl}`);
  render() {
    return (
      <div className={styles.leadershipContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.leadershipImage}>
            <img src={this.img} alt={this.props.content.title} />
          </div>
        </div>
        <div className={styles.titleContainer}>
          <a
            className={styles.title}
            href={this.props.content.organizationUrl}
            target="_blank"
            rel="noreferrer"
          >
            {this.props.content.title}
          </a>
        </div>
        <div className={styles.descriptionContainer}>
          <span className={styles.description}>
            {this.props.content.description}
          </span>
          {this.props.onReadMore && (
            <span className={styles.readMore} onClick={this.props.onReadMore}>
              ...read more
            </span>
          )}
        </div>
      </div>
    );
  }
}
