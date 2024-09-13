import { Component } from "react";
import styles from "./DescriptionBox.module.css";

export interface DescriptionBoxProps {
  title: string;
  description: string;
}

export class DescriptionBox extends Component<DescriptionBoxProps> {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.descriptionContainer}>
          <h1 className={styles.title}>{this.props.title}</h1>
          <p className={styles.description}>{this.props.description}</p>
        </div>
      </div>
    );
  }
}
