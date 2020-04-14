
exports.seed = function(knex) {
  return knex('cars').del()
    .then(function () {
      return knex('cars').insert([
        {vin: 'WAUZZZ8GZWN000325', make: 'Audi', model: '90', mileage: '40'},
        {vin: 'ZAM45MLA6C0062940', make: 'Maserati', model: 'GranTurismo', mileage: '40'},
        {vin: 'KNDJT2A60D7521100', make: 'Kia', model: 'Soul', mileage: '50'},
        {vin: '2G1FK1EJ6A9132904', make: 'Chevrolet', model: 'Camaro', mileage: '30'},
        {vin: 'WVGZZZ5NZHW900740', make: 'Volkswagen', model: 'Tiguan', mileage: '35'}
      ]);
    });
};
