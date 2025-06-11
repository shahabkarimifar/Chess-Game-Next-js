export default function Peace({ position, col, row }) {
  const onDragStart = (e) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", `${position}/${col}/${row}`);
    setTimeout(() => (e.target.style.display = "none"), 0);
  };
  return (
    <div
      className={`piece ${position} position-${col}${row}`}
      draggable={true}
      onDragStart={onDragStart}
    ></div>
  );
}
