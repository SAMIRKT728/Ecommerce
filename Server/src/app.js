const express = require ('express');
const config = require('./config');
const clientes = require('./routes/clientes');
const v1AuthRouter = require("./routes/authRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(bodyParser.json());

//configuracion
app.set('port', config.app.port)


//rutas
app.use('/api/clientes', clientes)

app.use("/api/auth", v1AuthRouter);

module.exports = app;