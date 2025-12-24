import React, { useState } from "react";
import TechnologyList from "./components/TechnologyList";
import AddTechnologyForm from "./components/AddTechnologyForm";

export default function App() {
  const [tecnologias, setTecnologias] = useState([
    { id: 1, nombre: "Inteligencia Artificial", favorito: false },
    { id: 2, nombre: "Computación Cuántica", favorito: false },
    { id: 3, nombre: "Blockchain", favorito: false },
    { id: 4, nombre: "Realidad Aumentada", favorito: false },
  ]);

  const agregarTecnologia = (nombre) => {
    const trimmed = nombre.trim();
    if (!trimmed) return;
    const nueva = {
      id: Date.now(),
      nombre: trimmed,
      favorito: false,
    };
    setTecnologias((prev) => [...prev, nueva]);
  };

  const toggleFavorito = (id) => {
    setTecnologias((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, favorito: !t.favorito } : t
      )
    );
  };

  return (
    <div className="app" data-testid="app-root">
      <h1>🌟 Panel de Tecnologías Emergentes</h1>
      <AddTechnologyForm onAdd={agregarTecnologia} />
      <TechnologyList
        tecnologias={tecnologias}
        onToggleFavorito={toggleFavorito}
      />
    </div>
  );
}
