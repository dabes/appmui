const pool = require("./database");

const get = (request, response) => {
  pool
    .query("select * from stn_matriz_gerada")
    .then((results) => response.status(200).json(results.rows))
    .catch((err) => console.error("Error executing query", err.stack));
};

const getByConta = (request, response) => {
  const conta = parseInt(request.params.conta);
  pool
    .query("select * from stn_matriz_gerada where conta = $1", [conta])
    .then((results) => response.status(200).json(results.rows))
    .catch((err) => {
      console.error("Error executing query", err.stack);
      response.status(500);
    });
};

const getByExMes = (request, response) => {
  const exercicio = parseInt(request.params.exercicio);
  const mes = parseInt(request.params.mes);
  const entidade = parseInt(request.params.entidade);
  pool
    .query(
      "select * from stn_matriz_gerada where exercicio = $1 and mes = $2 and grl_entidade = $3 order by conta,v1,v2,v3,v4,v5,v6,v7,tipo_int limit 100",
      [exercicio, mes, entidade]
    )
    .then((results) => response.status(200).json(results.rows))
    .catch((err) => {
      console.error("Error executing query", err.stack);
      response.status(500);
    });
};

module.exports = {
  get,
  getByConta,
  getByExMes,
};
