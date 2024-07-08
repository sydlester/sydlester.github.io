import React from "react";
import styles from "./Parallax.module.css";

interface Pos {
  x: number;
  y: number;
}

const smallStarPositions: Pos[] = [
  { x: 5, y: 5 },
  { x: 10, y: 40 },
  { x: 20, y: 70 },
  { x: 30, y: 30 },
  { x: 40, y: 40 },
  { x: 50, y: 5 },
  { x: 60, y: 90 },
  { x: 70, y: 20 },
  { x: 85, y: 50 },
  { x: 97, y: 60 },
];
const largeStarPositions: Pos[] = [
  { x: 3, y: 80 },
  { x: 14, y: 2 },
  { x: 26, y: 70 },
  { x: 32, y: 10 },
  { x: 48, y: 95 },
  { x: 50, y: 25 },
  { x: 65, y: 60 },
  { x: 80, y: 30 },
  { x: 95, y: 80 },
];

const SmallStar = (pos: Pos) => {
  return (
    <div
      className={styles.smallStar}
      style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
    ></div>
  );
};

const LargeStar = (pos: Pos) => {
  return (
    <div
      className={styles.largeStar}
      style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
    ></div>
  );
};

export default function Parallax() {
  return (
    <div>
      <div className={styles.container}>
        {smallStarPositions.map((pos, i) => (
          <SmallStar key={i} {...pos} />
        ))}
        {largeStarPositions.map((pos, i) => (
          <LargeStar key={i} {...pos} />
        ))}
        <div className={styles.wrapClouds}>
          <div className={styles.cloud1}>
            <img src={require("../assets/parallax/Cloud-1.png")} alt=""></img>
          </div>
          <div className={styles.cloud2}>
            <img src={require("../assets/parallax/Cloud-2.png")} alt=""></img>
          </div>
          <div className={styles.cloud3}>
            <img src={require("../assets/parallax/Cloud-3.png")} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}
