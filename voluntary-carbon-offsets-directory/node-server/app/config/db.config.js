module.exports = {
  HOST: "localhost",
  USER: "",
  PASSWORD: "",
  DB: "voluntary-carbon-offsets",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
