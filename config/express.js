let express = require("express");
var usuariosRouter = require('../app/routes/usuarios.js');

function setup(){
    let app = express();
    app.set("port", 3000);
    app.use(express.static('./public'));
    usariosRouter(app);
        return app;
 };
 