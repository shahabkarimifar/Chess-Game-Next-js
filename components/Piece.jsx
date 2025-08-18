import { useMainContext } from "@/contexts/MainContext";
import { arbiter } from "@/arbitrator/judge";
export default function Peace({ positionClass, col, row }) {
  const {
    appState: { turn, position },
    dispatch,
  } = useMainContext();

  const currentPosition = position[position.length - 1];

  const onDragStart = (e) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", `${positionClass}/${col}/${row}`);
    // setTimeout(() => (e.target.style.display = "none"), 0);

    if (turn === positionClass[0]) {
      dispatch({
        type: "UPDATE_CANDIDATE",
        payload: arbiter.regularMove(positionClass, currentPosition, col, row),
      });
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
