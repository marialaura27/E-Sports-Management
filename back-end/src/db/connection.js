const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: process.env.HOST,
  database: 'esports',
  password: process.env.PASSWORD,
  port: process.env.PORT,
})

module.exports = pool;