let usuarios = [{id:1, nome:"Joao",email:"nathy@gmail.com", senha: "010223"}, 
                {id:2,nome:"Pedro",email:"flavio.png@gmail.com", senha:"051219"}];

module.exports.inserirUsuarios = function(req, res){
    usuarios.push(req.body);
    res.status(200).send(req.body);
};
module.exports.obterUsuarios = function(req, res){
       var id = req.params.id;
       var usuario = usuario.find(usuario => (usuario._id==id));
       if(usuario){
           res.json(usuario);
       }else{
           res.status(404).send('Usuario não encontrado');
       }
   };

   module.exports.receberUsuario = function(req, res){
    var id = req.params.id;
    var usuario = usuarios.find(usuario => (usuario._id==id));
    if(usuario){
        res.json(usuario);
    }else{
        res.status(404).send('Usuario não encontrado');
    }
}

