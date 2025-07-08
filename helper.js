export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_POSITION":
      let turn = state.turn === "w" ? "b" : "w";
      return {
        ...state,
        turn,
        position: [...state.position, action.payload],
      };

    default:
      return state;
  }
};
export const createBoardState = () => {
  const position = new Array(8).fill("").map((item) => new Array(8).fill("🟧"));

  for (let i = 0; i <= 7; i++) {
    position[6][i] = "bp";
    position[1][i] = "wp";
  }

  position[7][7] = "br";
  position[7][6] = "bn";
  position[7][5] = "bb";
  position[7][4] = "bk";
  position[7][3] = "bq";
  position[7][2] = "bb";
  position[7][1] = "bn";
  position[7][0] = "br";

  position[0][0] = "wr";
  position[0][1] = "wn";
  position[0][2] = "wb";
  position[0][3] = "wq";
  position[0][4] = "wk";
  position[0][5] = "wb";
  position[0][6] = "wn";
  position[0][7] = "wr";

  return position;
};
