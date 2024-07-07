import {
  ExperienceCard,
  mockProps as experienceMock,
} from "../components/ExperienceCard";
import {
  LeadershipCard,
  mockProps as leadershipMock,
} from "../components/LeadershipCard";
import { AboutMeHeader } from "../components/AboutMeHeader";
import styles from "./AboutMe.module.css";
import { URL_LIST } from "../const";

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
  return (
    <div className={styles.wrapper}>
      <Intro />
      <div className={styles.aboutMeContainer}>
        <AboutMeHeader />
        <div className={styles.aboutMeContent}>
          <div className={styles.experienceWrapper}>
            <h2>Academic</h2>
            <ExperienceCard {...experienceMock} />
            <h2>Experience</h2>
            <ExperienceCard {...experienceMock} />
            <ExperienceCard {...experienceMock} />
            <ExperienceCard {...experienceMock} />
          </div>
          <div className={styles.leadershipWrapper}>
            <h2>Leadership</h2>
            <LeadershipCard {...leadershipMock} />
            <LeadershipCard {...leadershipMock} />
            <LeadershipCard {...leadershipMock} />
            <LeadershipCard {...leadershipMock} />
          </div>
        </div>
      </div>
    </div>
  );
}
