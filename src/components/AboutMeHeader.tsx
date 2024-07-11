import { Component } from "react";
import styles from "./AboutMeHeader.module.css";
import { URL_LIST } from "../const";

export class AboutMeHeader extends Component {
  render() {
    return (
      <div className={styles.aboutMeHeader}>
        <div className={styles.aboutMeTitle}>
          <img
            src={require("../assets/headers/AboutMe.png")}
            alt="about me"
          ></img>
        </div>
        <div className={styles.buttons}>
          <a
            className={styles.resumeBtn}
            href={URL_LIST.resume}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-arrow-down" aria-hidden="true"></i>
            RESUME
          </a>
          <a
            href={URL_LIST.github}
            className={styles.gitIcon}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github"></i>
          </a>
          <a
            href={URL_LIST.linkedIn}
            className={styles.linkedInIcon}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    );
  }
}
