const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const validationErros = require('express-validator');

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(validationErros());

require('./routes/home')(app);
require('./routes/produtos')(app);

app.use(express.static('./public'));

app.use((req, resp) => {

  resp.status(404).format({
    html: ()=> resp.render('erros/erro', {erro: '404 - Página não encontrada'}),
    json: () => resp.send({erro: '404 - Página não encontrada'})
  }) 

});

app.use((erro, req, resp, next) =>{
  
  console.error(`URL: ${req.url}`);
  console.error(erro);

  resp.status(500).format({
    html: resp.render('erros/erro', { erro: e }),
    json: resp.send(erro)
  });

});

module.exports = app;
