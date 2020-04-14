
exports.up = function(knex) {
    return knex.schema.createTable('sales', table => {
        table.increments();
        table.integer('car_id').unsigned().notNullable();
        table.string('buyer').notNullable();
        table.integer('price');

        table.foreign('car_id').references('id').inTable('cars');
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTableIfExists('sales');
  };
  