import React from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";

describe("Panel de Tecnologías Emergentes", () => {
  test("carga al menos 4 tecnologías al iniciar", () => {
    render(<App />);
    const items = screen.getAllByRole("listitem");
    expect(items.length).toBeGreaterThanOrEqual(4);
  });

  test("cada tecnología muestra su nombre en la interfaz", () => {
    render(<App />);
    const list = screen.getByRole("list");
    const items = within(list).getAllByRole("listitem");
    items.forEach((item) => {
      // Debe existir un span con el nombre
      const nameEl = within(item).getByText(/Inteligencia Artificial|Computación Cuántica|Blockchain|Realidad Aumentada/i);
      expect(nameEl).toBeInTheDocument();
    });
  });

  test("es posible agregar una nueva tecnología mediante el formulario", async () => {
    const user = userEvent.setup();
    render(<App />);
    const input = screen.getByLabelText("input-tecnologia");
    const button = screen.getByRole("button", { name: /agregar/i });

    await user.type(input, "Edge AI");
    await user.click(button);

    expect(screen.getByText("Edge AI")).toBeInTheDocument();
  });

  test("al agregar una tecnología, se muestra en la lista sin recargar la página", async () => {
    const user = userEvent.setup();
    render(<App />);
    const input = screen.getByLabelText("input-tecnologia");
    const button = screen.getByRole("button", { name: /agregar/i });

    const before = screen.getAllByRole("listitem").length;
    await user.type(input, "Redes Neuronales Espaciales");
    await user.click(button);
    const after = screen.getAllByRole("listitem").length;

    expect(after).toBe(before + 1);
    expect(screen.getByText("Redes Neuronales Espaciales")).toBeInTheDocument();
  });

  test("una tecnología puede marcarse y desmarcarse como favorita reflejando el cambio visualmente", async () => {
    const user = userEvent.setup();
    render(<App />);

    // Tomar el primer elemento con botón "Marcar"
    const button = screen.getAllByRole("button", { name: /marcar|favorito/i })[0];
    const item = button.closest("li");

    // Estado inicial: no favorito
    expect(button).toHaveTextContent(/marcar/i);
    expect(item).not.toHaveClass("favorito");

    // Marcar como favorito
    await user.click(button);
    expect(button).toHaveTextContent(/favorito/i);
    expect(item).toHaveClass("favorito");

    // Desmarcar
    await user.click(button);
    expect(button).toHaveTextContent(/marcar/i);
    expect(item).not.toHaveClass("favorito");
  });
});
