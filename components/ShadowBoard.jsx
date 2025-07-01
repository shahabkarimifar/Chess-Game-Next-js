"use client";
import { useRef, useState } from "react";
import Peace from "./Peace";
import { createBoardState } from "@/helper";
import { useMainContext } from "@/contexts/MainContext";

export default function ShadowBoard() {
  const { appState, dispatch } = useMainContext();
  const position = appState.position[appState.position.length - 1];

  const ref = useRef();
  const onDrop = (e) => {
    const [peaceClass, oldCol, oldRow] = e.dataTransfer
      .getData("text")
      .split("/");

    const { width, top, left } = ref.current.getBoundingClientRect();
    const squareSize = (width - 96) / 8;

    const newCol = Math.floor((e.clientX - (left + 48)) / squareSize);
    const newRow = 7 - Math.floor((e.clientY - (top + 48)) / squareSize);

    updatePosition(peaceClass, oldCol, oldRow, newCol, newRow);
  };
  const updatePosition = (peaceClass, oldCol, oldRow, newCol, newRow) => {
    const newBoard = position.map((el) => [...el]);
    newBoard[oldRow][oldCol] = "🟧";
    newBoard[newRow][newCol] = peaceClass;
    dispatch({ type: "UPDATE_POSITION", payload: newBoard });
  };

  const onDragOver = (e) => e.preventDefault();
  return (
    <div className="shadow" onDrop={onDrop} onDragOver={onDragOver} ref={ref}>
      {position.map((rows, row) =>
        rows.map((cols, col) => (
          <Peace
            position={position[row][col]}
            col={col}
            row={row}
            key={`${row}-${col}`}
          />
        ))
      )}
    </div>
  );
}
