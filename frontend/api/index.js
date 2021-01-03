const express = require("express");
const bodyParser = require("body-parser");
const busboy = require("connect-busboy");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 3000;
const host = "localhost";
const grl_entidade = require("./grl_entidade");
const stn_matriz_gerada = require("./stn_matriz_gerada_k");

// app.use(busboy());
// app.use(
// bodyParser.urlencoded({
//   extended: true,
//   limit: "200mb"
// })
// );

var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});

app.use(morgan("combined", { stream: accessLogStream }));

app.use(cors());

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

// app.get("/users", db.getUsers);
// app.get("/users/:id", db.getUserById);
// app.post("/users", db.createUser);
// app.put("/users/:id", db.updateUser);
// app.delete("/users/:id", db.deleteUser);

app.get("/api/stn_matriz_gerada", bodyParser.json(), stn_matriz_gerada.get);
app.get(
  "/api/stn_matriz_gerada/:conta",
  bodyParser.json(),
  stn_matriz_gerada.getByConta
);
app.get(
  "/api/stn_matriz_gerada/:entidade/:exercicio/:mes",
  bodyParser.json(),
  stn_matriz_gerada.getByExMes
);

app.get("/api/ente", bodyParser.json(), grl_entidade.get);
app.get("/api/ente/:id", bodyParser.json(), grl_entidade.getById);

app.listen(port, host, () => {
  console.log(`App running on port ${port}.`);
});
