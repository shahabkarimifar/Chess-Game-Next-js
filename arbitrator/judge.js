const { candidateRookMove, candidateBishopMove } = require("./moves");

export const arbiter = {
  regularMove: (positionClass, currentPosition, col, row) => {
    if (positionClass === "wr" || positionClass === "br")
      return candidateRookMove(positionClass, currentPosition, col, row);

    if (positionClass === "wb" || positionClass === "bb")
      return candidateBishopMove(positionClass, currentPosition, col, row);
  },
};
