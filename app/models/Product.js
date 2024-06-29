const { Model } = require('objection'); // Llamar a Model de la libreria objection 

class Product extends Model { // Creo herencia de Model
    static get tableName() { // Especifica el nombre de la tabla
        return 'products';
    }

    static get jsonSchema() { // Especifica la estructura de la tabla
        return {
            type: 'object', // object para un dato, array para un listado
            required: ['nombre'], // campos requeridos 
            properties: { // estructura de los campos
                id: { type: 'integer' },
                nombre: { type: 'string' },
                precio: { type: 'number' },
                stock: { type: 'integer' },
            }
        };
    }

    static async getProducts() { // Metodo para listar productos
        return await Product.query(); // Select * from products
    }

    static async insert(data) { // Metodo para insertar productos 
        return await Product.query().insert(data); // insert into products values (...)
    }

    static async update(data, id) { // Metodo para editar productos
        return await Product.query().patchAndFetchById(id, data); // update products set data where id = 0
    }

    static async delete(id) { // Metodo para eliminar productos
        return await Product.query().deleteById(id); // delete from products where id = 0
    }
}

module.exports = Product;
