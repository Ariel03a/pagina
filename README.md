# Panel de Tecnologías Emergentes (React + Jest)

## Descripción
Durante el desarrollo del ejercicio, comencé replicando la aplicación de CodePen en VS Code para las futuras pruebas. 
Inicialmente, GitHub Copilot me sugirió la estructura básica de los componentes (`TechnologyItem`, `TechnologyList`, `AddTechnologyForm`) y el uso de `useState` para manejar el estado. Estas sugerencias me dieron un punto de partida rápido y organizado. Al intentar ejecutar la aplicación en CodePen con React 18, apareció el error: *"Cannot destructure property 'useState' of 'React' as it is undefined"*. Asi que fue necesario un ajuste manual: cambié las librerías externas a **React 17** y utilicé `ReactDOM.render()` en lugar de la nueva API `createRoot()`. Este cambio permitió que la aplicación funcionara correctamente en el entorno de CodePen. Posteriormente, pasé a las pruebas automatizadas. Copilot sugirió la estructura inicial de los tests con `describe` y `test`, además del uso de `userEvent` para simular interacciones. 

Finalmente, configuré Jest y Babel para que pudieran interpretar JSX. De lo contario, sin Babel, Jest no entiende el código JSX y las pruebas fallan. Con la configuración correcta (`babel.config.js` y `jest.config.js`), las pruebas se ejecutaron con éxito.

---

## Código sugerido por la IA
- **Estructura inicial de componentes en React**: Copilot generó funciones como `TechnologyItem`, `TechnologyList` y `AddTechnologyForm` con `props` y `useState`.
- **Fragmentos de pruebas unitarias**: Copilot sugirió la estructura básica de los tests (`describe`, `test`) y el uso de `userEvent` para simular interacciones.
- **Aserciones iniciales**: Copilot propuso validaciones como `toBeInTheDocument()` y `getByRole()`.

---

## Código corregido o ajustado manualmente
- **Compatibilidad con CodePen**: Cambié la versión de React a **17** y usé `ReactDOM.render()` en lugar de `createRoot()`.
- **Validación visual de favoritos**: Añadí la clase `favorito` y estilos condicionales para que las pruebas detecten el cambio visual.
- **Configuración de Jest y Babel**: Configuré `babel.config.js` y `jest.config.js` para que Jest pueda interpretar JSX y correr las pruebas.

---

## Aprendizajes
- **Pruebas automatizadas en React**:  
  - Es necesario configurar Babel para que Jest entienda JSX.  
  - Testing Library se apoya en roles y accesibilidad semántica, lo que mejora la calidad de las pruebas.  
  - Las pruebas permiten validar interacciones sin necesidad de recargar la página.

- **Uso de IA en el desarrollo**:  
  - Copilot acelera la escritura de código y pruebas, pero requiere ajustes manuales para adaptarse al contexto real y sobre todo en la versiones.  
  - La IA es útil para generar borradores y estructuras, mientras que el desarrollador asegura la compatibilidad y la calidad final.  
  - Integrar IA en el flujo de trabajo ayuda a optimizar tiempo y enfocarse en la lógica de negocio.

---

## Entregables
- Link de CodePen: https://codepen.io/Ariel03a/pen/MYyMgOo 
- Repositorio con:
  - Código fuente: Github
  - Pruebas unitarias (`tests/App.test.jsx`)
  - Archivo README.md  
- Capturas de pantalla:
  - Sugerencia generada por Copilot
    
    <img width="740" height="379" alt="image" src="https://github.com/user-attachments/assets/96ad0d83-fa55-4705-8fea-28bc1d91911b" />
  - Código de prueba completado con apoyo de IA
    
    <img width="527" height="170" alt="image" src="https://github.com/user-attachments/assets/0cc95cf6-c4ef-404f-be32-b78aba976351" />
    <img width="879" height="362" alt="image" src="https://github.com/user-attachments/assets/12f193af-d541-4dfc-a62b-f58f1f477318" />

    


