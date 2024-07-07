import { Component } from "react";
import styles from "./LeadershipCard.module.css";
import { URL_LIST } from "../const";

export type LeadershipCardProps = typeof LeadershipCard.defaultProps & {
  title: string;
  description: string;
  imgUrl: string;
  organizationUrl: string;
};

export class LeadershipCard extends Component<LeadershipCardProps> {
  static defaultProps = {
    imgUrl: URL_LIST.noImage,
  };

  render() {
    return (
      <div className={styles.leadershipContainer}>
        <div className={styles.leadershipImage}>
          <img src={this.props.imgUrl} alt={this.props.title} />
        </div>
        <div className={styles.leadershipContent}>
          <h3>
            {" "}
            <a
              href={this.props.organizationUrl}
              target="_blank"
              rel="noreferrer"
            >
              {this.props.title}
            </a>
          </h3>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export const mockProps = {
  ...LeadershipCard.defaultProps,
  ...({
    title: "Organization Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus, eros at efficitur tempor",
    organizationUrl: "https://www.google.com",
  } as LeadershipCardProps),
};
