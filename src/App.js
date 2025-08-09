import {
  sortAscending,
  sortDescending,
  flipDominoes,
  removeDuplicate,
  countDoubleNumber,
  resetToDefault,
} from "./utils";
import DominoCard from "./component/domino-card";
import InputNumber from "./component/input-field";
import React, { useState } from "react";

export default function App() {
  const defaultDominoes = [
    [6, 1],
    [4, 3],
    [5, 1],
    [3, 3],
    [1, 1],
    [3, 4],
    [1, 2],
  ];

  const [dominoes, setDominoes] = useState(defaultDominoes);

  return (
    <div style={{ placeItems: "center" }}>
      <div style={{ margin: "0px 4px" }}>
        <div style={{ fontFamily: "sans-serif" }}>
          <h2>Dominoes</h2>
        </div>
        <div
          style={{
            backgroundColor: "#EFEEEE",
            borderRadius: "6px",
            border: "solid #E5E5E5 0.4px",
            width: "600px",
            gap: "8px",
            padding: "12px",
            marginBottom: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "between",
          }}
        >
          <p
            style={{
              lineHeight: "0",
              fontFamily: "sans-serif",
              fontWeight: "bold",
              fontSize: "1rem",
              textAlign: "start",
            }}
          >
            Source
          </p>
          <div style={{ fontFamily: "monospace" }}>
            {JSON.stringify(defaultDominoes)}
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#EFEEEE",
            borderRadius: "6px",
            border: "solid #E5E5E5 0.4px",
            width: "600px",
            gap: "8px",
            padding: "12px",
            marginBottom: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space=between",
          }}
        >
          <p
            style={{
              lineHeight: "0",
              fontFamily: "sans-serif",
              fontWeight: "bold",
              fontSize: "1rem",
              textAlign: "start",
            }}
          >
            Double Number
          </p>
          <p
            style={{
              lineHeight: "0",
              fontFamily: "monospace",
              fontSize: "1rem",
              textAlign: "start",
            }}
          >
            {countDoubleNumber(dominoes)}
          </p>
        </div>
      </div>
      <div
        style={{
          width: "600px",
          display: "flex",
          justifyContent: "center",
          margin: "auto",
          display: "flex",
          padding: "14px",
          borderRadius: "12px",
          backgroundColor: "#1A2A80",
        }}
      >
        <DominoCard dominoes={dominoes} />
      </div>
      <div style={{ display: "flex", gap: "8px" }}>
        <div
          style={{
            width: "600px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button
            style={{
              padding: "14px 20px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#0046FF",
              color: "white",
              fontSize: "16px",
              marginTop: "14px",
            }}
            onClick={() => setDominoes(sortAscending(dominoes))}
          >
            Sort ASC
          </button>
          <button
            style={{
              padding: "14px 20px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#0046FF",
              color: "white",
              fontSize: "16px",
              marginTop: "14px",
            }}
            onClick={() => setDominoes(sortDescending(dominoes))}
          >
            Sort DESC
          </button>
          <button
            style={{
              padding: "14px 20px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#0046FF",
              color: "white",
              fontSize: "16px",
              marginTop: "14px",
            }}
            onClick={() => setDominoes(flipDominoes(dominoes))}
          >
            Flip
          </button>
          <button
            style={{
              padding: "14px 20px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#0046FF",
              color: "white",
              fontSize: "16px",
              marginTop: "14px",
            }}
            onClick={() => setDominoes(removeDuplicate(dominoes))}
          >
            Remove Duplicate
          </button>
          <button
            style={{
              padding: "14px 20px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#0046FF",
              color: "white",
              fontSize: "16px",
              marginTop: "14px",
            }}
            onClick={() => setDominoes(resetToDefault(defaultDominoes))}
          >
            Reset
          </button>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <InputNumber />
        <button
          style={{
            padding: "14px 20px",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "#0046FF",
            color: "white",
            fontSize: "16px",
            marginTop: "14px",
          }}
          onClick={() => setDominoes(removeCard())}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
