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
      <div className={styles.description}>
        <p>
          My computer science curriculum includes: Architecture, Data
          Structures, Algorithm Design & Analysis, Discrete Mathematics, Machine
          Learning & Data Science, Database Systems, Cryptography & Security,
          Data Analysis & Optimization.
        </p>
        <p>
          I have completed a minor in environmental science and policy, where I
          primarily focused on ecology and ecosystem dynamics. I am interested
          in the use of data science and algorithms to understand and protect
          endangered populations.
        </p>
        <p>
          I am also pursuing a minor in visual media studies, which allows me to
          pursue my interests in visual arts and design, as well as the
          intersection of art and technology in digital media.
        </p>
      </div>
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
          As a TA for Discrete Mathematics, I learned how to organize and
          explain deeply technical topics in different ways. I developed an
          intuition for identifying sources of misunderstanding or confusion and
          gained invaluable confidence and experience decomposing complex
          problems and designing solutions.
        </p>
        <p>
          I held office hours to individually assist students with assignments
          and supplement understanding of course content including logic,
          proofs, combinatorics, and graph theory.
        </p>
        <p>
          I worked with a small team to develop TA training materials, write
          sample solutions, and guide grading policies for the proofs and
          inductions portion of the course.
        </p>
        <p>
          I graded assignments and examinations, and worked with the teaching
          team to evaluate and adjust practices throughout the course.
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
      <div className={styles.description}>
        <p>
          I joined a multi-disciplinary team to study the effects of
          recreational beach usage on the nesting behavior of wild sea turtles.
          I learned teamwork, experimental design, and data collection and
          analysis techniques— including anomaly and pattern detection.
        </p>
        <p>
          I worked with Marine Scientists and rangers from the National Park
          Service to gather turtle telemetry, nest location and topological
          data, and recreational visitor usage patterns from remote areas of the
          Cape Lookout National Seashore.
        </p>
        <p>
          We used analysis to identify causal pathways and quantify
          relationships between different experimental parameters.
        </p>
        <p>
          We documented results and presented recommendations for optimizing the
          value of the park for both recreational use and wildlife.
        </p>
      </div>
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
