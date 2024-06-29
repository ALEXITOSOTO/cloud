const { Model } = require('objection');

class Categorie extends Model{
    static get tableName(){
        return 'categories'
    }
    static get jsonSchema() { // Especifica la estructura de la tabla
        return {
            type: 'object', // object para un dato, array para un listado
            required: ['name'], // campos requeridos 
            properties: { // estructura de los campos
                id: { type: 'integer' },
                name: { type: 'string' },
                description: { type: 'string' },
            }
        };
    }

    static async getCategories() { // Metodo para listar usuarios 
        return await Categorie.query(); // Select * from Categories
    }

    static async insert(data) { // Metodo para insertar usuarios 
        return await Categorie.query().insert(data); // insert into Categories values (...)
    }

    static async update(data, id) { // Metodo para editar usuarios
        return await Categorie.query().patchAndFetchById(id, data); // update Categories set data where id = 0
    }

    static async delete(id) { // Metodo para eliminar usuarios
        return await Categorie.query().deleteById(id); // delete from Categories where id = 0
    }
}

module.exports = Categorie;
