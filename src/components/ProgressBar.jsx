export default function ProgressBar({ current, total }) {
  const percent = (current / total) * 100;

  return (
    <div style={{ width: "80%", height: "6px", background: "#333" }}>
      <div
        style={{
          width: percent + "%",
          height: "100%",
          background: "#7C5CFF"
        }}
      />
    </div>
  );
}