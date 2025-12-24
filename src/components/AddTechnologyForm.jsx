import React, { useState } from "react";

export default function AddTechnologyForm({ onAdd }) {
  const [nuevaTec, setNuevaTec] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(nuevaTec);
    setNuevaTec("");
  };

  return (
    <form onSubmit={onSubmit} aria-label="form-agregar">
      <input
        type="text"
        value={nuevaTec}
        onChange={(e) => setNuevaTec(e.target.value)}
        placeholder="Agregar nueva tecnología"
        aria-label="input-tecnologia"
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
