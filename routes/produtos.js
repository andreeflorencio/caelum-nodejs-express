const getConnection = require('../db/getConnection');

const Promise = require('bluebird');

module.exports = (app) => {

  app.get('/produtos', (req, resp, next) =>{

    const connection = getConnection();

    const queryPromisificada = Promise.promisify(connection.query).bind(connection);

    queryPromisificada('SELECT * FROM livros')
      .then((results)=>{

        resp.format({
          json: () => resp.send(results),
          html: () => resp.render('produtos/lista', {livros: results}),
          default: () => next('formato não suportado')
        });

        
        connection.end();
      })
      .catch(next)
  })

  app.get('/produtos/form', (req, resp)=>{
      resp.render('produtos/form', { validationErrors: []});
  });

  app.get('/produtos/form', (req, resp)=>{
      resp.render('produtos/form', { validationErrors: []});
  });

  app.post('/produtos', (req, resp, next)=>{

    const connection = getConnection();

    req.assert('titulo', "Titulo obrigatório").notEmpty();
    req.assert('preco', "Titulo obrigatório").isNumeric();

    const promiseValidacao = req.asyncValidationErrors()

    promiseValidacao
      .then(()=>{

        const queryPromisificada = Promise.promisify(connection.query).bind(connection);

        return queryPromisificada(`INSERT INTO livros SET ?`, req.body)

      })
      .then (()=>{
        resp.redirect('/produtos');
      })
      .catch((erro)=>{
        next(erro)
      })
  });
}