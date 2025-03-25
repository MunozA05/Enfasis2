const express =  require("express");
const cors = require("cors");

const config = require("../config");

const app = express();

const auth = require("../routes/auth.routes");
const roles = require("../routes/rol.routes");
const users = require("../routes/user.routes");

//middlewares de configuracion
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//config
app.set('port',config.app.port);

//Rutas
app.use("/api/rol", roles);
app.use("/api/user", users);
app.use("/api/auth", auth);

module.exports = app;