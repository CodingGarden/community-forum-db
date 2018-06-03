exports.up = (knex, Promise) => {
  return knex.schema.createTable('role', (table) => {
    table.increments();
    table.text('name');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('role');
};