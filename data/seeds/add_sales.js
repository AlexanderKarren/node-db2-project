
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sales').del()
    .then(function () {
      // Inserts seed entries
      return knex('sales').insert([
        {car_id: 3, buyer: "Myron Adkins", price: 10000},
        {car_id: 3, buyer: "Jennie Maldonado", price: 10000},
        {car_id: 3, buyer: "Nichole Carlson", price: 24500},
        {car_id: 5, buyer: "Dustin Yates", price: 10000},
        {car_id: 5, buyer: "Rosemary Salazar", price: 32000},
        {car_id: 5, buyer: "Freddie Sullivan", price: 50000},
      ]);
    });
};
