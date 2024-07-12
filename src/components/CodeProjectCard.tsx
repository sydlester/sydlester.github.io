import { Component } from "react";
import { ProjectList } from "../const";
import styles from "./CodeProjectCard.module.css";

export class CodeProjectCard extends Component<ProjectList> {
  spotifyTagList = () => {
    return (
      <div className={styles.tags}>
        <div className={styles.react}>REACT</div>
        <div className={styles.node}>NODE.JS</div>
        <div className={styles.javascript}>JAVASCRIPT</div>
        <div className={styles.html}>HTML/CSS</div>
        <div className={styles.oauth}>OAUTH</div>
      </div>
    );
  };

  ecommerceTagList = () => {
    return (
      <div className={styles.tags}>
        <div className={styles.python}>PYTHON</div>
        <div className={styles.flask}>FLASK</div>
        <div className={styles.sql}>SQL</div>
        <div className={styles.html}>HTML/CSS</div>
      </div>
    );
  };

  render() {
    return (
      <div className={styles.projectContainer}>
        <div className={styles.projectImage}>
          <img src={this.props.imgUrl} alt={this.props.title} />
        </div>
        <div className={styles.projectContent}>
          <span className={styles.title}>{this.props.title}</span>
          {/* <span className={styles.dates}>{this.props.date}</span> */}
          {this.props.title === "STARIFY" && this.spotifyTagList()}
          {this.props.title === "ECOMMERCE MARKETPLACE" &&
            this.ecommerceTagList()}
          <p>{this.props.description}</p>
          <div className={styles.buttonContainer}>
            <a href={this.props.gitUrl}>GITHUB REPO</a>
          </div>
        </div>
      </div>
    );
  }
}
