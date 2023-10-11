import useClickCounter from "./useCount";

export default function MouseEnterCounter() {
  const { enterCount, handleMouseEnter } = useClickCounter();

  return (
    <div
      onMouseEnter={handleMouseEnter}
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: "lightblue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <p>Mouse Enter Count: {enterCount}</p>
    </div>
  );
}
