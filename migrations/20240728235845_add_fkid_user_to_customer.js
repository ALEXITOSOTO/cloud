/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// Ejemplo de migración para añadir restricción de clave externa a la tabla customer

exports.up = function(knex) {
    return knex.schema.table('customer', function(table) {
        table.integer('fkid_user').unsigned().notNullable();
        table.foreign('fkid_user').references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('customer', function(table) {
        table.dropForeign(['fkid_user']);
        table.dropColumn('fkid_user');
    });
};
