const { Model } = require('objection'); // Llamar a Model de la libreria objection 

class User extends Model { // Creo herencia de Model
    static get tableName() { // Especifica el nombre de la tabla
        return 'users';
    }

    static get jsonSchema() { // Especifica la estructura de la tabla
        return {
            type: 'object', // object para un dato, array para un listado
            required: ['usuario', 'email'], // campos requeridos 
            properties: { // estructura de los campos
                id: { type: 'integer' },
                usuario: { type: 'string' },
                email: { type: 'string', format: 'email' },
                contrasena: { type: 'string' },
            }
        };
    }

    static async getUsers() { // Metodo para listar usuarios 
        return await User.query(); // Select * from users
    }

    static async insert(data) { // Metodo para insertar usuarios 
        return await User.query().insert(data); // insert into users values (...)
    }

    static async update(data, id) { // Metodo para editar usuarios
        return await User.query().patchAndFetchById(id, data); // update users set data where id = 0
    }

    static async delete(id) { // Metodo para eliminar usuarios
        return await User.query().deleteById(id); // delete from users where id = 0
    }
}

module.exports = User;
