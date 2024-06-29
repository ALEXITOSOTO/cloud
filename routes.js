const express = require('express'); // llamado a framework 

// llamar a handlers del API
const customerHandler = require('./app/handlers/customer.handler');
const userHandler = require('./app/handlers/user.handler');
const productHandler = require('./app/handlers/product.handler');
const orderHandler = require('./app/handlers/order.handler');
const categorieHandler = require('./app/handlers/categorie.handler');
// variable para encapsular rutas
const router = express.Router();
// registrar las rutas
// rutas de customer 
// Haciendo petición a get y ver los datos en listCustomer
router.get('/customers', customerHandler.listCustomer); // obtener cliente
router.post('/customers', customerHandler.insertCustomer); // insertar cliente
router.patch('/customers/:id', customerHandler.updateCustomer); // actualizar cliente
router.delete('/customers/:id', customerHandler.deleteCustomer); // eliminar cliente

router.get('/users', userHandler.listUser); // obtener user
router.post('/users', userHandler.insertUser); // insertar user
router.patch('/users/:id', userHandler.updateUser); // actualizar user
router.delete('/users/:id', userHandler.deleteUser); // eliminar user

router.get('/products', productHandler.listProduct); // obtener product
router.post('/products', productHandler.insertProduct); // insertar product
router.patch('/products/:id', productHandler.updateProduct); // actualizar product
router.delete('/products/:id', productHandler.deleteProduct); // eliminar product

router.get('/orders', orderHandler.listOrder); // obtener Order
router.post('/orders', orderHandler.insertOrder); // insertar Order
router.patch('/orders/:id', orderHandler.updateOrder); // actualizar Order
router.delete('/orders/:id', orderHandler.deleteOrder); // eliminar Order

router.get('/categories', categorieHandler.listCategorie); // obtener categoria
router.post('/categories', categorieHandler.insertCategorie); // insertar categoria
router.patch('/categories/:id', categorieHandler.updateCategorie); // actualizar categoria
router.delete('/categories/:id', categorieHandler.deleteCategorie); // eliminar categoria

module.exports = router;