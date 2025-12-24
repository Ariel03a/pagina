# Proyecto-Final

# Sistema de Pedidos — Ionic + React

Este proyecto es una aplicación construida con Ionic y React que permite a los usuarios realizar pedidos seleccionando platos por categoría, cantidad y tipo. Incluye autenticación, visualización de pedidos cargados y una interfaz limpia y responsiva.
Se basa en la opcion 4 de una aplicación de pizzería. Mostrando el frontend correspondiente a la materia y su conexión con el backend en una Maquina Virtual del mismo. 
Importante usar "npm install"

Video: https://youtu.be/0y6XapgpWcc 

---

##  Tecnologías utilizadas

- [Ionic React](https://ionicframework.com/docs/react)
- TypeScript
- React Router
- Context API
- CSS personalizado
- Axios

---

##  Estructura del proyecto

src/ 
├── components/ 
│ └── LogoutBottom.tsx 
├── Context/ 
│ └── authContext.tsx 
├── Pages/ 
│ └── Login.tsx 
│ └── Pedido.tsx
│ └── pedidosCargados.tsx 
├── Services/ 
│ └── apiService.ts 
├── App.tsx 
├── main.tsx

---

##  Explicación de rutas.

- /LogoutBottom.tsx: Botón para cerrar sesión, probablemente visible en varias páginas.
- /authContext.tsx: Es usado por Login.tsx para manejar el estado de autenticación. Usa y verifica el token generado par dar acceso.
-/Login.tx: Página de autenticación. El usuario ingresa sus credenciales como un correo y contraseña validos en la db para acceder al sistema.
- /Pedido.tsx: Página principal para realizar pedidos. El usuario puede seleccionar platos, categorías, cantidades y tipos. Cada una esta disponible y una vez enviado el pedido se guarda en la base de datos. 
- /pedidosCargados.tsx: Página de visualización de pedidos cargados por el usuario. Todos los pedidos muestran el estado, producto, categoria, cantidad, fecha y hora. 
- /apiService.ts: Encargado de las llamas HTTP con el backend. Contienen las funcionen y operanmediante Axios.
- /App.tsx: Se define las rutas mediante react Router y su comportamiento. 
- /main.tsx: Encargado de definir la base de la aplicación.

---

##  Problemas. 
- Rendimiento: Uno de los problemas más críticos no considerados en la elaboración del proyecto fue el alcance y caracteristicas planteadas. Fue el equipo disponible, debido a limitaciones de como la RAM y o una gráfica decente, varias veces se colgó la VM o alguna de las pestañas como VS Code o el propio navegador.
- Rutas: Al no documentar correctamente las rutas desde un inicio, se volvió insostenible las nuevas rutas existentes en el backend y luego las rutas del frontend. Muchos problemas no hubieran sucedido con una buena documentación desde el principio.
- Valores incorrectos: Gran parte del tiempo perdido se debió a que no se respetaban los valores establecidos y por ende, la comunicación era inviable. 

---

##  Conclusiones
- Usar correctamente las rutas y respetar los valores que tanto como el backend y el frontend esperan recibir. Son puntos criticos para la comunicación de cada uno.
- Comprobar mediante postman resulta siempre viable en pequeñas o medianas pruebas. Entendiendo así la lógica detrás. 

---

##  Recomendaciones.
- Modular el codigo para separar funciones y no olvidar qué hace cada una en el proceso.
- Documentar el desarrollo del aplicativo y guardar sus caracteristicas como rutas. 

---

##  Notas.
- El backend cayo un total de 3 veces, 2 de ellas sin un respaldo. Por ello, siempre disponer de uno.
