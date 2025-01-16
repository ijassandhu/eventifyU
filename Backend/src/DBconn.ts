import { Pool } from "pg";

export default new Pool({
  user: process.env.postgresUser,
  host: process.env.postgresHost,
  database: process.env.postgresDB,
  password: process.env.postgresPass,
  port: parseInt(process.env.postgresPort ?? "0"),
});
