require("dotenv").config();
const app = require("./app");
const pool = require("./db/connection");

const PORT = 3002;

app.listen(PORT, async () => {
  const { rows } = await pool.query("SELECT version()")
  console.log('>> Version: ', rows[0]?.version);
  console.log(`>> A API E-sports está sendo executada na porta ${PORT}`);
});
