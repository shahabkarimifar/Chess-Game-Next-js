import { useMainContext } from "@/contexts/MainContext";

export default function Peace({ positionClass, col, row }) {
  const {
    appState: { turn, position },
    dispatch,
  } = useMainContext();

  const currentPosition = position[position.length - 1];

  const candidateRookMove = () => {
    const allowMoves = [];
    const player = positionClass[0];
    const opponent = player === "w" ? "b" : "w";
    const direction = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    direction.forEach(([dx, dy]) => {
      for (let i = 1; i < 8; i++) {
        const newRow = row + i * dx;
        const newCol = col + i * dy;

        const cell = currentPosition?.[newRow]?.[newCol];

        if (cell === undefined) break;

        if (cell.startsWith(opponent)) {
          allowMoves.push([newRow, newCol]);
          break;
        }

        if (cell.startsWith(player)) break;

        allowMoves.push([newRow, newCol]);
      }
    });

    return allowMoves;
  };

  const onDragStart = (e) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", `${positionClass}/${col}/${row}`);
    // setTimeout(() => (e.target.style.display = "none"), 0);

    if (turn === positionClass[0]) {
      if (positionClass === "wr" || positionClass === "br") {
        const candidate = candidateRookMove();
        dispatch({ type: "UPDATE_CANDIDATE", payload: candidate });
      }
    }
  };

  return (
    <div
      className={`piece ${positionClass} position-${col}${row}`}
      draggable={true}
      onDragStart={onDragStart}
    ></div>
  );
}
