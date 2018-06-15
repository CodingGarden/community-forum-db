exports.up = function(knex, Promise) {
  return knex.schema.createTable('category', (table) => {
    table.increments();
    table.text('title').notNullable();
    table.text('description').notNullable();
    table.text('image_url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('category');
};
