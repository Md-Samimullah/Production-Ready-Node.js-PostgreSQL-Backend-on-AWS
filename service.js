require('dotenv').config();
const http = require('http');
const { Client } = require('pg');

const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432,
  ssl: { rejectUnauthorized: false }
});

client.connect()
  .then(() => console.log("✅ DB Connected"))
  .catch(err => console.error("❌ DB Error", err));

const server = http.createServer(async (req, res) => {

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>App is Running</h1>");
    return;
  }

  if (req.url === "/tests") {
    const result = await client.query("SELECT * FROM tests");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(result.rows));
    return;
  }

  res.writeHead(404);
  res.end("Not Found");
});

server.listen(3000, () => {
  console.log("🚀 Server running on port 3000");
});
