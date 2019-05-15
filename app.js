const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, resp)=>{
    resp.render('home/home')
});

app.get('/produtos', (req, resp) =>{
    
    const livros = [
        {
            titulo: 'Android',
            preco: 'R$ 10,00',
            descricao: 'Livro para aprender Android'
        },
        {
            titulo: 'Node',
            preco: 'R$ 25,00',
            descricao: 'Livro para aprender NodeJs'
        }
    ]
    
    resp.render('produtos/lista', {livros: livros})
});


app.use(express.static('./public'));

app.use((req, resp) => {
    resp
        .status(404)
        .render('erros/erro', {erro: '404 - Página não encontrada'})
});

app.listen(3000, () =>{
    console.log(`Servidor rotando em http://localhost:3000`);    
    
});