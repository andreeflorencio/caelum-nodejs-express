document.getElementById('btn-gravar').addEventListener(
    'click', stopDefAction, false
);

function stopDefAction(evt) {
    evt.preventDefault();
    var tituloDoLivro = document.querySelector('#titulo').value;
    var precoDoLivro = document.querySelector('#preco').value;
    var descricaoDoLivro = document.querySelector('#descricao').value;

    createBook(tituloDoLivro, precoDoLivro, descricaoDoLivro);
}

function createBook(tituloDoLivro, precoDoLivro, descricaoDoLivro){
  var xhr = new XMLHttpRequest();
  xhr.open("POST", '/produtos', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
      titulo: tituloDoLivro,
      preco: precoDoLivro,
      descricao: descricaoDoLivro
  }));

  clearFields();

}

function clearFields(){
  document.querySelector('#titulo').value = "";
  document.querySelector('#preco').value = "";
  document.querySelector('#descricao').value = "";
  document.getElementById("titulo").focus();

  Swal.fire(
    'Cadastrado!',
    'Livro Cadastrado com Sucesso!',
    'success'
  )
}
