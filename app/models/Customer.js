const { Model } = require('objection'); //Llamar a Model de la libreria objection 

class Customer extends Model{ //Creo herencia de Model
    static get tableName(){ //Especifica el nombre de la tabla
        return 'customer';
    }

    static get jsonSchema(){//Especifica la estructura de la tabla
        return{
            type:'object', //object para un dato, array para un listado
            required: ['name','email'], //campos requeridos 
            properties:{ //estructura de los campos
                id: {type: 'integer'},
                name: {type: 'string'},
                email: {type: 'string', format:'email'},
                date: {type: 'string', format: 'date-time'},
                age: {type: 'integer'}

            }
        };
    }

    static async getCustomers(){ //Metodo para listar clientes 
        return await Customer.query(); //Select * from Customer
    }
    static async insert(data){ //Metodo para insertar clientes 
        return await Customer.query().insert(data); //insert into customer values (...)
    }
    static async update(data, id){ //metodo para editar cliente
        return await Customer.query().patch(id, data); //update set data where id= 0
    }
    static async delete(id){ //metodo para eliminar cliente
        return await Customer.query().deleteById(id); // delete from customer where id = 0
    }
}

module.exports = Customer;