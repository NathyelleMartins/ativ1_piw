let controller = require("../controllers/usuarios.js");

module.exports = function(app){
   app.get("/usuarios",controller.listaUsuarios);
   app.get("/usuarios/:id",controller.obterUsuarios);
   app.post('/api/usuarios',controller.inserirUsuario);
}