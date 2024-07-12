import { ExperienceCard } from "../components/ExperienceCard";
import { LeadershipCard } from "../components/LeadershipCard";
import styles from "./AboutMe.module.css";
import {
  PopUpList,
  URL_LIST,
  experienceList,
  leadershipList,
  popUpList,
} from "../const";
import TextPopUp from "../components/TextPopUp";
import { useState } from "react";

const Intro = () => {
  return (
    <div className={styles.introContainer}>
      <div className={styles.profilePic}>
        <img src={URL_LIST.noImage} alt="" />
      </div>
      <div className={styles.introParagraph}>
        <h1>HI! MY NAME IS SYDNEY.</h1>
        <div>
          <p>
            I am a senior at Duke University majoring in computer science, and
            minoring in environmental policy & visual media studies.
          </p>
          <p>
            I’m an adventurous and outgoing student with a passion for
            problem-solving and creativity. I have a keen interest in
            mathematics theory, databases, and user interface design.
          </p>
          <p>
            This website is a collection of my creative work, coding projects,
            and adventures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default function AboutMe() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpProps, setPopUpProps] = useState<PopUpList>({
    title: "",
    description: "",
  });

  const handleShowPopUp = () => {
    setShowPopUp(!showPopUp);
  };

  const handlePopUp = (props: PopUpList) => {
    setPopUpProps(props);
    handleShowPopUp();
  };

  return (
    <div className={styles.wrapper}>
      <Intro />
      {showPopUp && (
        <TextPopUp content={popUpProps} onClose={handleShowPopUp} />
      )}
      <div className={styles.aboutMeContainer}>
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
        <div className={styles.aboutMeContent}>
          <div className={styles.experienceWrapper}>
            <div className={styles.aboutMeSubtitle} style={{ width: "130px" }}>
              Academic
            </div>
            <ExperienceCard
              content={experienceList[0]}
              onReadMore={() => handlePopUp(popUpList[0])}
            />
            <div className={styles.aboutMeSubtitle} style={{ width: "150px" }}>
              Experience
            </div>
            <ExperienceCard
              content={experienceList[1]}
              onReadMore={() => handlePopUp(popUpList[1])}
            />
            <ExperienceCard
              content={experienceList[2]}
              onReadMore={() => handlePopUp(popUpList[2])}
            />
            <ExperienceCard
              content={experienceList[3]}
              onReadMore={() => handlePopUp(popUpList[3])}
            />
          </div>
          <div className={styles.leadershipWrapper}>
            <div className={styles.aboutMeSubtitle} style={{ width: "150px" }}>
              Leadership
            </div>
            <LeadershipCard
              content={leadershipList[0]}
              onReadMore={() => handlePopUp(popUpList[4])}
            />
            <LeadershipCard content={leadershipList[1]} />
            <LeadershipCard content={leadershipList[2]} />
            <LeadershipCard content={leadershipList[3]} />
          </div>
        </div>
      </div>
    </div>
  );
}
