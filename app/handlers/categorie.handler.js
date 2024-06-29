const Categorie = require('../models/Categorie');
//Crear una funcion para llamado a select del modelo
//Envia parametros req y res 
//req significa request = peticion
//res significa response = respuesta
const listCategorie = async(req, res)=>{
    try{
        const categorie = await Categorie.getCategories(); //Llamado a funcion de select 
        res.json(categorie); // parsea a json y retorna la respuesta 
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
const insertCategorie = async(req, res) => {
    try{
        const categorie = await Categorie.insert(req.body);
        res.status(201).json(categorie)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
const updateCategorie = async(req, res) => {
    try{
        const categorie = await Categorie.update(req.body, req.params.id);
        //200 por default
        res.json(categorie)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
const deleteCategorie = async(req, res) => {
    try{
        const categorie = await Categorie.delete(req.params.id);
        res.json(categorie)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
module.exports = {
    listCategorie,
    insertCategorie,
    updateCategorie,
    deleteCategorie
};