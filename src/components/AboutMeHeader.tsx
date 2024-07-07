import { Component } from "react";
import styles from "./AboutMeHeader.module.css";
import { URL_LIST } from "../const";

export class AboutMeHeader extends Component {
  render() {
    return (
      <div className={styles.aboutMeHeader}>
        <div className={styles.aboutMeTitle}>
          <h1>ABOUT ME</h1>
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
        <div className={styles.resumeBtn}>
          <a href={URL_LIST.resume} target="_blank" rel="noreferrer">
            <i className="fa fa-arrow-down" aria-hidden="true"></i>
            RESUME
          </a>
        </div>
      </div>
    );
  }
}
