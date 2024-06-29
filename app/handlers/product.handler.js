const Product = require('../models/Product');
//Crear una funcion para llamado a select del modelo
//Envia parametros req y res 
//req significa request = peticion
//res significa response = respuesta
const listProduct = async(req, res)=>{
    try{
        const product = await Product.getProducts(); //Llamado a funcion de select 
        res.json(product); // parsea a json y retorna la respuesta 
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
const insertProduct = async(req, res) => {
    try{
        const product = await Product.insert(req.body);
        res.status(201).json(product)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
const updateProduct = async(req, res) => {
    try{
        const product = await Product.update(req.body, req.params.id);
        //200 por default
        res.json(product)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
const deleteProduct = async(req, res) => {
    try{
        const product = await Product.delete(req.params.id);
        res.json(product)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
module.exports = {
    listProduct,
    insertProduct,
    updateProduct,
    deleteProduct
};