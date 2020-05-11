const Knex = require('knex');
const configuration = require('../../knexfile');   //(../..// para voltar duas pastas)

const connection = Knex(configuration.development);

module.exports = connection;