require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./config/db");
const path = require("path");

db.connect()
  .then(() => {
    console.log("Conectado ao banco de dados PostgreSQL");

    app.use(express.json());

    //css
    app.use("/styles", express.static(path.join(__dirname, "styles")));

    const userRoutes = require("./routes/userRoutes");
    const taskRoutes = require("./routes/taskRoutes");
    const frontRoutes = require("./routes/frontRoutes");

    app.use("/api/users", userRoutes);
    app.use("/api/tasks", taskRoutes);
    app.use("/", frontRoutes);

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco de dados:", err);
  });
