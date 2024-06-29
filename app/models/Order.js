const { Model } = require('objection'); // Llamar a Model de la libreria objection 

class Order extends Model { // Creo herencia de Model
    static get tableName() { // Especifica el nombre de la tabla
        return 'orders';
    }

    static get jsonSchema() { // Especifica la estructura de la tabla
        return {
            type: 'object', // object para un dato, array para un listado
            required: ['numero', 'estado'], // campos requeridos 
            properties: { // estructura de los campos
                id: { type: 'integer' },
                numero: { type: 'string' },
                direccion: { type: 'string' },
                total_precio: { type: 'number' },
                estado: { type: 'string' },
            }
        };
    }

    static async getOrders() { // Metodo para listar usuarios 
        return await Order.query(); // Select * from Orders
    }

    static async insert(data) { // Metodo para insertar usuarios 
        return await Order.query().insert(data); // insert into Orders values (...)
    }

    static async update(data, id) { // Metodo para editar usuarios
        return await Order.query().patchAndFetchById(id, data); // update Orders set data where id = 0
    }

    static async delete(id) { // Metodo para eliminar usuarios
        return await Order.query().deleteById(id); // delete from Orders where id = 0
    }
}

module.exports = Order;
