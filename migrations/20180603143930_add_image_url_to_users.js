exports.up = (knex, Promise) => {
  return knex.schema.table('users', (table) => {
    table.text('image_url').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.table('users', (table) => {
    table.dropColumn('image_url');
  });
};