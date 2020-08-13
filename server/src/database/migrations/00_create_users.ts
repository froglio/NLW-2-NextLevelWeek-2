import Knex from 'knex';

export async function up(knex: Knex) {
    // Quais alterações queremos fazer no banco de dados

    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}

export async function down(knex: Knex) {
    // Se deu ruim, voltar atras

    return knex.schema.dropTable('users');
}