const pool = require("./database");

const get = (request, response) => {
  pool
    .query("select e.id,e.codigo,e.descricao,e.brasao from grl_entidade e")
    .then((results) => response.status(200).json(results.rows))
    .catch((err) => {
      console.error("Error executing query", err.stack);
      response.status(500);
    });
};

const getById = (request, response) => {
  const id = parseInt(request.params.id);
  pool
    .query(
      "select e.id,e.codigo,e.descricao,e.brasao from grl_entidade e where e.id = $1",
      [id]
    )
    .then((results) => response.status(200).json(results.rows))
    .catch((err) => {
      console.error("Error executing query", err.stack);
      response.status(500);
    });
};

module.exports = {
  get,
  getById,
};
