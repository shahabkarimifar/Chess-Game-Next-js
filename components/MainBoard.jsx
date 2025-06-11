import Square from "./Square";

export default function MainBoard() {
  const columns = Array(8)
    .fill()
    .map((item, index) => 8 - index);

  const rows = Array(8)
    .fill()
    .map((item, index) => String.fromCharCode(97 + index));

  return (
    <div className="board">
      {columns.map((col, i) =>
        rows.map((row, j) => (
          <Square j={j} i={i} col={col} row={row} key={col + row} />
        ))
      )}
    </div>
  );
}
