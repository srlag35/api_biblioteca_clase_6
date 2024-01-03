const express = require("express");
const app = express();
const errorHandler = require("./middleware/errorHandler")

app.use(express.json());
app.use(errorHandler);

// Importamos el Router de Libros
const librosRouter = require("./routes/libros");

// Importamos el Middleware Error Handler
const errorHandler = require("./middlewares/errorHandler");

app.use("/libros", librosRouter);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});
