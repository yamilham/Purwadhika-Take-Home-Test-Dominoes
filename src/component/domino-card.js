export default function DominoCard({ dominoes }) {
  return (
    <div style={{ display: "flex", gap: "12px" }}>
      {dominoes.map((card, index) => (
        <div
          style={{
            borderRadius: "4px",
            border: "solid #dddddd 0.8px",
            backgroundColor: "white",
            gap: "8px",
            padding: "12px",
            marginBottom: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "between",
          }}
          key={index}
        >
          {" "}
          <p
            style={{
              lineHeight: "0",
              fontFamily: "monospace",
              fontSize: "1.5rem",
            }}
          >
            {card[0]}
          </p>
          <p
            style={{
              lineHeight: "0",
              fontFamily: "monospace",
              fontSize: "1.5rem",
            }}
          >
            -
          </p>
          <p
            style={{
              lineHeight: "0",
              fontFamily: "monospace",
              fontSize: "1.5rem",
            }}
          >
            {card[1]}
          </p>
        </div>
      ))}
    </div>
  );
}
