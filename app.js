const express = require('express');
const app = express();

app.set('view engine', 'ejs');

require('./routes/home')(app);
require('./routes/produtos')(app);

app.use(express.static('./public'));

app.use((req, resp) => {
    resp
        .status(404)
        .render('erros/erro', {erro: '404 - Página não encontrada'});
});

module.exports = app;