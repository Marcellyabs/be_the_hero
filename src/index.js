const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); // permite que tds aplicacoes frontend acesse esse backend
app.use(express.json());
app.use(routes);
app.listen(80);


/**
 * 
 * Metodos http
 * 
 * Get buscar uma informacao no backend
 * Post: criar uma informacao no backend
 * PUT : Alterar inf backens
 * Delete: deletar inf no backend
 * 
 */

 /**
  * Tipos de Parametros
  * 
  * Query Params: Parametros nomeado enviados na rota apos '?' (filtro, paginacao)
  * Route Params: itilixado para indentificar recursos
  * Request body: corpo da requisicao, utilizado para criar ou alterar recursos
  
  */

  /**
   * Bancos de dados
   * 
   * SQL: mysql,sqlite, Oracle, Microsoft SQL Server
   * Nosql: MongoDB, CouchDB
   */

   /**
    * Driver: SELECT * from users
    * Query Builder:
    */

