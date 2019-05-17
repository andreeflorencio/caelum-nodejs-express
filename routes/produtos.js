const getConnection = require('../db/getConnection');

module.exports = (app) => {

  app.get('/produtos', (req, resp, next) =>{

    const connection = getConnection();

     connection.query('SELECT * FROM livros', (mySqlErro, results) => {
         try {
           if(mySqlErro) throw mySqlErro
           resp.render('produtos/lista', {livros: results});
           connection.end();
         } catch (e) {
           next(e);
         }
       })
    });


    app.get('/produtos/form', (req, resp)=>{
        resp.render('produtos/form', { validationErrors: []});
    });

    app.get('/produtos/form', (req, resp)=>{
        resp.render('produtos/form', { validationErrors: []});
    });

    app.post('/produtos', (req, resp, next)=>{

      const connection = getConnection();
    

      connection.query(`INSERT INTO livros SET ?`, req.body, (erroMySql)=>{

        try {
          if (erroMySql) throw erroMySql
          resp.redirect('/produtos');
          
        } catch (erro) {
          next(erro)
        }
      })

    });
}
