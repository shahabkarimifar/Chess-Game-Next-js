const {
  candidateRookMove,
  candidateBishopMove,
  candidateQueenMove,
  candidateKnightMove,
  candidateKingMove,
} = require("./moves");

export const arbiter = {
  regularMove: (positionClass, currentPosition, col, row) => {
    if (positionClass === "wr" || positionClass === "br")
      return candidateRookMove(positionClass, currentPosition, col, row);

    if (positionClass === "wn" || positionClass === "bn")
      return candidateKnightMove(positionClass, currentPosition, col, row);

    if (positionClass === "wb" || positionClass === "bb")
      return candidateBishopMove(positionClass, currentPosition, col, row);

    if (positionClass === "wq" || positionClass === "bq")
      return candidateQueenMove(positionClass, currentPosition, col, row);

    if (positionClass === "wk" || positionClass === "bk")
      return candidateKingMove(positionClass, currentPosition, col, row);
  },
};
