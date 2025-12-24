import React from "react";
import TechnologyItem from "./TechnologyItem";

export default function TechnologyList({ tecnologias, onToggleFavorito }) {
  return (
    <ul className="tech-list" style={{ listStyle: "none", padding: 0 }}>
      {tecnologias.map((tec) => (
        <TechnologyItem
          key={tec.id}
          tec={tec}
          onToggleFavorito={() => onToggleFavorito(tec.id)}
        />
      ))}
    </ul>
  );
}
