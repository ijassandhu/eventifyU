import fs from "fs";
import path from "path";
import pg from "pg";

const config = {
  connectionString: process.env.PGCS,
  ssl: {
    rejectUnauthorized: true,
    ca: fs
      .readFileSync(path.resolve(__dirname, process.env.PGSSL as string))
      .toString(),
  },
};

const client = new pg.Client(config);
client.connect();

export default client;
