"use client";
import { useMainContext } from "@/contexts/MainContext";

export default function Square({ j, i, col, row }) {
  const {
    appState: { position, candidate },
  } = useMainContext();

  const currentPosition = position[position.length - 1];
  const squareClass = (i, j) => {
    let c = "dark";
    (i + j) % 2 !== 0 ? (c = "light") : c;
    if (candidate.find((dir) => dir[0] === j && dir[1] === i)) {
      if (currentPosition[j][i]) c += " opponent";
      else c += " selected";
    }

    return c;
  };
  return (
    <div className={`square ${squareClass(j, 7 - i)}`}>
      {row}
      {col}
    </div>
  );
}
