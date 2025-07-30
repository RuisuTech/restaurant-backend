const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use("/usuarios", router);
server.use("/reservas", router);

server.listen(process.env.PORT || 3000, () => {
  console.log("JSON Server corriendo con CORS");
});
