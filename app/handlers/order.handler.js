const Order = require('../models/Order');
//Crear una funcion para llamado a select del modelo
//Envia parametros req y res 
//req significa request = peticion
//res significa response = respuesta
const listOrder = async(req, res)=>{
    try{
        const order = await Order.getOrders(); //Llamado a funcion de select 
        res.json(order); // parsea a json y retorna la respuesta 
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
const insertOrder = async(req, res) => {
    try{
        const order = await Order.insert(req.body);
        res.status(201).json(order)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
const updateOrder = async(req, res) => {
    try{
        const order = await Order.update(req.body, req.params.id);
        //200 por default
        res.json(order)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
const deleteOrder = async(req, res) => {
    try{
        const order = await Order.delete(req.params.id);
        res.json(order)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
module.exports = {
    listOrder,
    insertOrder,
    updateOrder,
    deleteOrder
};