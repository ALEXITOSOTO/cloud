const { Model } = require('objection');

class User extends Model {
    static get tableName() {
        return 'users';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['usuario', 'email'],
            properties: {
                id: { type: 'integer' },
                usuario: { type: 'string' },
                email: { type: 'string', format: 'email' },
                contrasena: { type: 'string' },
            }
        };
    }

    static async getUsers() {
        return await User.query();
    }

    static async insert(data) {
        return await User.query().insert(data);
    }

    static async update(data, id) {
        return await User.query().patchAndFetchById(id, data);
    }

    static async delete(id) {
        return await User.query().deleteById(id);
    }
}

module.exports = User;
