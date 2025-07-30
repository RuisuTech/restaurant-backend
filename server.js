// server.js
const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// ✅ Middleware para CORS
server.use(cors());
server.use(middlewares);
server.use(jsonServer.bodyParser);

// ✅ Usa el router completo montado en la raíz para que funcionen /usuarios, /reservas, etc.
server.use(router);

// ✅ Inicia el servidor en el puerto de Render o local
server.listen(process.env.PORT || 3000, () => {
  console.log("JSON Server corriendo con CORS");
});
