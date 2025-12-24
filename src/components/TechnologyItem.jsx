import React from "react";

export default function TechnologyItem({ tec, onToggleFavorito }) {
  return (
    <li
      className={`tech-item ${tec.favorito ? "favorito" : ""}`}
      data-testid={`tech-item-${tec.id}`}
      style={{
        margin: "10px 0",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: tec.favorito ? "#ffeaa7" : "#f1f2f6",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="tech-name">{tec.nombre}</span>
      <button
        className="btn-favorito"
        aria-pressed={tec.favorito}
        onClick={onToggleFavorito}
        style={{
          marginLeft: "10px",
          backgroundColor: tec.favorito ? "#00b894" : "#d63031",
          color: "white",
          border: "none",
          padding: "5px 10px",
          borderRadius: "5px",
        }}
      >
        {tec.favorito ? "★ Favorito" : "☆ Marcar"}
      </button>
    </li>
  );
}
