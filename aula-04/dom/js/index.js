const formulario = document.querySelector(".lista__form");

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

