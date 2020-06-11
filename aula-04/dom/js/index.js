const formulario = document.querySelector(".lista__form");
const tabela = document.querySelector(".extrato__table");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  /*inserir aqui o código*/

  const itemInput = document.getElementById('input-item');
  const valorInput = document.getElementById('input-valor');
  const dataInput = document.getElementById('input-data');

  const itemTabela = document.createElement
  ('td');
  const valorTabela = document.createElement
  ('td');
  const dataTabela = document.createElement
  ('td');

  itemTabela.textContent = itemInput.value;
  valorTabela.textContent = valorInput.value;
  dataTabela.textContent = dataInput.value;

  const tabela = document.querySelector('table');
  const linhaTabela = document.createElement('tr');
  linhaTabela.appendChild(itemTabela);
  linhaTabela.appendChild(valorTabela);
  linhaTabela.appendChild(dataTabela);

  tabela.appendChild(linhaTabela);

  itemInput.value = '';
  valorInput.value = '';
  dataInput.value = '';

});




  let inputNome = document.querySelector("#listaInputNome");
  let valorInputNome = inputNome.value;

  let inputValor = document.getElementById("listaInputValor");
  let valorInputValor = inputValor.value;

  let inputData = document.getElementById("listaInputData");
  let valorInputData = inputData.value;


  let novaLinha = document.createElement("tr");
  tabela.appendChild(novaLinha);

  let novoNome = document.createElement("td");
  novaLinha.appendChild(novoNome);
  novoNome.textContent = valorInputNome;

  let novoValor = document.createElement("td");
  novaLinha.appendChild(novoValor);
  novoValor.textContent = valorInputValor;

  let novaData = document.createElement("td");
  novaLinha.appendChild(novaData);
  novaData.textContent = valorInputData;

  formulario.reset();
});
