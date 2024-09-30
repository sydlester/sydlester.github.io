import styles from "./TextPopUp.module.css";

export type ModalTypes = "duke" | "blooket" | "ta" | "marine" | "ski";

interface TextPopUpProps {
  type: ModalTypes;
  onClose: () => void;
}

const TextPopUp = ({ type, onClose }: TextPopUpProps) => {
  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <div className={styles.close} onClick={onClose}>
          <img src={require("../assets/UI/X.png")} alt="close" />
        </div>
        <div className={styles.contentContainer}>
          {renderModalContent(type)}
        </div>
      </div>
    </div>
  );
};

export default TextPopUp;

const renderModalContent = (type: ModalTypes) => {
  switch (type) {
    case "duke":
      return dukeModal();
    case "blooket":
      return blooketModal();
    case "ta":
      return taModal();
    case "marine":
      return marineModal();
    case "ski":
      return skiModal();
  }
};

const dukeModal = () => {
  return (
    <div className={styles.text}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>Duke University</div>
        <div className={styles.subtitle}>B.S. Computer Science, 2025</div>
      </div>
      <div className={styles.description}>description</div>
    </div>
  );
};

const blooketModal = () => {
  return (
    <div className={styles.text}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>Software Engineering Intern</div>
        <div className={styles.subtitle}>Blooket, May 2024 - Ongoing</div>
      </div>
      <div className={styles.description}>description</div>
    </div>
  );
};

const taModal = () => {
  return (
    <div className={styles.text}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>Teaching Assistant</div>
        <div className={styles.subtitle}>Discrete Math for CS, Spring 2024</div>
      </div>
      <div className={styles.description}>
        <p>
          Held office hours to individually assist students with assignments and
          supplement understanding of course content including logic, proofs,
          combinatorics, and graph theory.
        </p>
        <p>
          Worked with a small team to develop TA training materials, write
          sample solutions, and guide grading policies for the proofs and
          inductions portion of the course.
        </p>
        <p>
          Graded assignments and examinations, and worked with the teaching team
          to evaluate and adjust practices throughout the course.
        </p>
      </div>
    </div>
  );
};

const marineModal = () => {
  return (
    <div className={styles.text}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>Research Intern</div>
        <div className={styles.subtitle}>
          DukeEngage Marine Lab, Summer 2022
        </div>
      </div>
      <div className={styles.description}>description</div>
    </div>
  );
};

const skiModal = () => {
  return (
    <div className={styles.text}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>Duke Ski & Board</div>
        <div className={styles.subtitle}>President, 2024-25</div>
        <div className={styles.subtitle}>Equipment Chair, 2023-24</div>
      </div>
      <div className={styles.description}>description</div>
    </div>
  );
};
