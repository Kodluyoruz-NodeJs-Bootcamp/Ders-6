module.exports = {
  type: "mysql",
  host: "localhost",
  port: process.env.DB_PORT,
  username: "root",
  password: "mypassword",
  database: "denem",
  entities: ["src/entity/*.ts"],
  logging: true,
  synchronize: true,
};
