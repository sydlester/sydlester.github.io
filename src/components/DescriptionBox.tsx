import { Component } from "react";
import styles from "./DescriptionBox.module.css";

export interface DescriptionBoxProps {
  description: string;
}

export class DescriptionBox extends Component<DescriptionBoxProps> {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>{this.props.description}</p>
        </div>
      </div>
    );
  }
}
