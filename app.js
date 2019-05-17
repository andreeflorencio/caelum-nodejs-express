const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.json())


require('./routes/home')(app);
require('./routes/produtos')(app);

app.use(express.static('./public'));

app.use((req, resp) => {
    resp
        .status(404)
        .render('erros/erro', {erro: '404 - Página não encontrada'});
});

app.use((erro, req, resp, next) =>{
  console.error(`URL: ${req.url}`);
  console.error(erro);
  resp
    .render('erros/erro', { erro: e })
    .status(500)
});

module.exports = app;
