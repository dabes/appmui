const config = require("./config.json");
const Pool = require("pg").Pool;
const pool = new Pool(config.database);

module.exports = pool;
