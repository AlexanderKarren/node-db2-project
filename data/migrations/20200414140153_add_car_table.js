
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
      table.increments();
      table.string('vin').notNullable();
      table.string('make').notNullable();
      table.string('model').notNullable();
      table.string('mileage').notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
