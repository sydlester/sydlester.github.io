import React from "react";
import styles from "./Parallax.module.css";

interface Pos {
  x: number;
  y: number;
}

const starPositions: Pos[] = [
  { x: 5, y: 5 },
  { x: 10, y: 40 },
  { x: 20, y: 80 },
  { x: 30, y: 30 },
  { x: 40, y: 40 },
  { x: 50, y: 5 },
  { x: 60, y: 90 },
  { x: 70, y: 20 },
  { x: 80, y: 50 },
  { x: 90, y: 90 },
];

const Star = (pos: Pos) => {
  return (
    <div
      className={styles.smallStar}
      style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
    ></div>
  );
};

export default function Parallax() {
  return (
    <div>
      <div className={styles.container}>
        <Star {...starPositions[0]} />
      </div>
    </div>
  );
}
