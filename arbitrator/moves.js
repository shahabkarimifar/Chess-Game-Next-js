export const candidateRookMove = (positionClass, currentPosition, col, row) => {
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

export const candidateBishopMove = (
  positionClass,
  currentPosition,
  col,
  row
) => {
  const allowMoves = [];
  const player = positionClass[0];
  const opponent = player === "w" ? "b" : "w";
  const direction = [
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
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
