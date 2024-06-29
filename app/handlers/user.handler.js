const User = require('../models/user');
//Crear una funcion para llamado a select del modelo
//Envia parametros req y res 
//req significa request = peticion
//res significa response = respuesta
const listUser = async(req, res)=>{
    try{
        const user = await User.getUsers(); //Llamado a funcion de select 
        res.json(user); // parsea a json y retorna la respuesta 
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
const insertUser = async(req, res) => {
    try{
        const user = await User.insert(req.body);
        res.status(201).json(user)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
const updateUser = async(req, res) => {
    try{
        const user = await User.update(req.body, req.params.id);
        //200 por default
        res.json(user)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
const deleteUser = async(req, res) => {
    try{
        const user = await User.delete(req.params.id);
        res.json(user)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
module.exports = {
    listUser,
    insertUser,
    updateUser,
    deleteUser
};