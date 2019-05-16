const mysql = require('mysql');

module.exports = (app) => {

    app.get('/produtos', (req, resp) =>{

       const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'cdc'
          });
        

        connection.query('SELECT * FROM livros', (error, results) => {
            resp.render('produtos/lista', {livros: results});
          });
                
    });

    app.get('/produtos/form', (req, resp)=>{
        resp.render('produtos/form', {validationErrors: []});
    });
}