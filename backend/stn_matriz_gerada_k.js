// const pool = require("./database");
const config = require("./config.json");

const knex = require("knex")({
  client: "pg",
  connection: config.database,
  debug: true,
});

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
  knex({ smg: "stn_matriz_gerada" })
    .select({
      Conta: "smg.conta",
      // ex: "smg.exercicio",
      // mes: "smg.mes",
      V1: "smg.v1",
      T1: "smg.t1",
      V2: "smg.v2",
      T2: "smg.t2",
      V3: "smg.v3",
      T3: "smg.t3",
      V4: "smg.v4",
      T4: "smg.t4",
      V5: "smg.v5",
      T5: "smg.t5",
      V6: "smg.v6",
      T6: "smg.t6",
      V7: "smg.v7",
      T7: "smg.t7",
      Valor: "smg.valor",
      Tipo: "smg.tipo",
      "Tipo Int": "smg.tipo_int",
      "Natureza Valor": "smg.natureza_valor",
      Entidade: "ge.descricao",
    })
    .join({ ge: "grl_entidade" }, "smg.grl_entidade", "ge.id")
    .where("smg.exercicio", "=", exercicio)
    .andWhere("smg.mes", "=", mes)
    .andWhere("smg.grl_entidade", "=", entidade)
    .orderBy([
      "smg.conta",
      "smg.v1",
      "smg.v2",
      "smg.v3",
      "smg.v4",
      "smg.v5",
      "smg.v6",
      "smg.v7",
      "smg.tipo_int",
    ])
    // .limit(100)

    .then((results) => {
      const data = {
        columns: Object.keys(results[0]).map((v) => {
          return { label: v, field: v };
        }),
        rows: results,
      };
      response.status(200).json(data);
    })
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
