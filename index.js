const express = require('express');
const cors = require('cors');
const knex = require('knex');
const { Model } = require('objection');
const app = express();
const port = 3000;
const User = require('./app/models/User');
const Categorie = require('./app/models/Categorie');
const Order = require('./app/models/Order');
const Product = require('./app/models/Product');
const Customer = require('./app/models/Customer');
// Configuración de Knex
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development); // Usa la configuración de desarrollo

// Configura Objection.js para usar la instancia de Knex
Model.knex(db);

app.use(cors());
app.use(express.json());

// Ruta para manejar la inserción de un nuevo usuario
app.post('/api/users', async (req, res) => {
    try {
        const { usuario, email, contrasena } = req.body;
        const [id] = await User.insert({ usuario, email, contrasena });
        res.status(201).json({ id, usuario, email, contrasena });
    } catch (error) {
        console.error('Error adding user:', error.message);
        res.status(500).json({ error: 'Error adding user' });
    }
});

// Ruta para obtener todos los usuarios
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.getUsers();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error.message);
        res.status(500).json({ error: 'Error fetching users' });
    }
});

// Ruta para manejar la inserción de una nueva categoría
app.post('/api/categories', async (req, res) => {
    try {
        const { name, description } = req.body;
        const [id] = await Categorie.insert({ name, description });
        res.status(201).json({ id, name, description });
    } catch (error) {
        console.error('Error adding category:', error.message);
        res.status(500).json({ error: 'Error adding category' });
    }
});

// Ruta para obtener todas las categorías
app.get('/api/categories', async (req, res) => {
    try {
        const categories = await Categorie.getCategories();
        res.json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error.message);
        res.status(500).json({ error: 'Error fetching categories' });
    }
});

// Ruta para manejar la inserción de una nueva orden
app.post('/api/orders', async (req, res) => {
    try {
        const { numero, direccion, total_precio, estado } = req.body;
        const [id] = await Order.insert({ numero, direccion, total_precio, estado });
        res.status(201).json({ id, numero, direccion, total_precio, estado });
    } catch (error) {
        console.error('Error adding order:', error.message);
        res.status(500).json({ error: 'Error adding order' });
    }
});

// Ruta para obtener todas las órdenes
app.get('/api/orders', async (req, res) => {
    try {
        const orders = await Order.query();
        res.json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error.message);
        res.status(500).json({ error: 'Error fetching orders' });
    }
});

// Ruta para obtener todos los productos
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.getProducts();
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error.message);
        res.status(500).json({ error: 'Error fetching products' });
    }
});

// Ruta para manejar la inserción de un nuevo producto
app.post('/api/products', async (req, res) => {
    try {
        const { nombre, precio, stock } = req.body;
        const [id] = await Product.insert({ nombre, precio, stock });
        res.status(201).json({ id, nombre, precio, stock });
    } catch (error) {
        console.error('Error adding product:', error.message);
        res.status(500).json({ error: 'Error adding product' });
    }
});

// Ruta para manejar la inserción de un nuevo cliente
app.post('/api/customers', async (req, res) => {
    try {
        const { name, email, age, fkid_user } = req.body;
        if (!fkid_user) {
            return res.status(400).json({ error: 'El campo fkid_user es requerido' });
        }
        const [id] = await Customer.insert({ name, email, age, fkid_user });
        res.status(201).json({ id, name, email, age, fkid_user });
    } catch (error) {
        console.error('Error adding customer:', error.message);
        res.status(500).json({ error: 'Error adding customer' });
    }
});

// Ruta para obtener todos los clientes
app.get('/api/customers', async (req, res) => {
    try {
        const customers = await Customer.getCustomers();
        res.json(customers);
    } catch (error) {
        console.error('Error fetching customers:', error.message);
        res.status(500).json({ error: 'Error fetching customers' });
    }
});


app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
