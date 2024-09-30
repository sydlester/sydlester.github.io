import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { ExperienceCard } from "../components/ExperienceCard";
import { LeadershipCard } from "../components/LeadershipCard";
import styles from "./AboutMe.module.css";
import { URL_LIST } from "../const";
import { experienceList, leadershipList } from "../data/aboutMeData";
import TextPopUp, { ModalTypes } from "../components/TextPopUp";
import { useState } from "react";

const Intro = () => {
  const resumeURL = require("../SydneyLesterResume.pdf");
  return (
    <div className={styles.introContainer}>
      <div className={styles.profilePic}>
        <img src={URL_LIST.noImage} alt="" />
      </div>
      <div className={styles.introParagraph}>
        <h1>HI! MY NAME IS SYDNEY.</h1>
        <div className={styles.buttons}>
          <a
            className={styles.resumeBtn}
            href={resumeURL}
            download="SydneyLesterResume.pdf"
          >
            <MdOutlineFileDownload style={{ fontSize: "20px" }} />
            RESUME
          </a>
          <a
            href={URL_LIST.github}
            className={styles.gitIcon}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href={URL_LIST.linkedIn}
            className={styles.linkedInIcon}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
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
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<ModalTypes>("duke");

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleModal = (type: ModalTypes) => {
    setModalType(type);
    handleShowModal();
  };

  return (
    <div className={styles.wrapper}>
      <Intro />
      {showModal && <TextPopUp type={modalType} onClose={handleShowModal} />}
      <div className={styles.aboutMeContainer}>
        <div className={styles.aboutMeHeader}>
          <div className={styles.aboutMeTitle}>
            <img
              src={require("../assets/headers/AboutMe.png")}
              alt="about me"
            ></img>
          </div>
        </div>
        <div className={styles.aboutMeContent}>
          <div className={styles.experienceWrapper}>
            <div className={styles.aboutMeSubtitle} style={{ width: "130px" }}>
              Academic
            </div>
            <ExperienceCard
              content={experienceList[0]}
              onReadMore={() => handleModal("duke")}
            />
            <div className={styles.aboutMeSubtitle} style={{ width: "150px" }}>
              Experience
            </div>
            <ExperienceCard
              content={experienceList[1]}
              onReadMore={() => handleModal("blooket")}
            />
            <ExperienceCard
              content={experienceList[2]}
              onReadMore={() => handleModal("ta")}
            />
            <ExperienceCard
              content={experienceList[3]}
              onReadMore={() => handleModal("marine")}
            />
          </div>
          <div className={styles.leadershipWrapper}>
            <div className={styles.aboutMeSubtitle} style={{ width: "150px" }}>
              Leadership
            </div>
            <LeadershipCard
              content={leadershipList[0]}
              onReadMore={() => handleModal("ski")}
            />
            <LeadershipCard content={leadershipList[1]} />
            <LeadershipCard content={leadershipList[2]} />
            <LeadershipCard content={leadershipList[3]} />
            <LeadershipCard content={leadershipList[4]} />
          </div>
        </div>
      </div>
    </div>
  );
}
