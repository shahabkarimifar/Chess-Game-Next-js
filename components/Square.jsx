export default function Square({ j, i, col, row }) {
  const squareClass = (i, j) => {
    let c = "light";
    (i + j) % 2 !== 0 ? (c = "dark") : c;
    return c;
  };
  return (
    <div className={`square ${squareClass(j, i)}`} >
      {row}
      {col}
    </div>
  );
}
