// Auxiliadores de Arrays + métodos com funções
// Question Title


// <----------------------------- Exercicio 1 ------------------------------------------>

// 1. O filter() permite remover elementos que não se encaixam em determinados critérios. É incrivelmente útil para desmontar grandes arrays, para que possamos escolher apenas os itens que queremos.
// ____________________________
// Imagine que queremos enviar uma mensagem apenas aos colaboradores que são Desenvolvedoras. Podemos usar .filter () para retornar apenas os usuários que se encaixam na função correta.
//SAÍDA:
// 0: {PrimeiroNome: "Ana", ultimoNo: "Bouley", funcao: "Desenvolvedora"}
// 1: {PrimeiroNome: "Chloe", ultimoNome: "Alnaji", funcao: "Desenvolvedora"}
// 2: { PrimeiroNome: 'Robert', ultimoNome: 'Santos', funcao: 'Desenvolvedora' }

// ----------- Respostas1 ---------------------

const users = [{ PrimeiroNome: 'Ana', ultimoNo: 'Bouley', funcao: 'Desenvolvedora' },
{ PrimeiroNome: 'Chloe', ultimoNome: 'Alnaji', funcao: 'Desenvolvedora' },
{ PrimeiroNome: 'Jonathan', ultimoNome: 'Alves', funcao: 'Publicitário' },
{ PrimeiroNome: 'Micaela', ultimoNome: 'Herman', funcao: 'Lead Instructor' },
{ PrimeiroNome: 'Robert', ultimoNome: 'Santos', funcao: 'Desenvolvedora' },
{ PrimeiroNome: 'Wes', ultimoNome: 'Correia', funcao: 'Instrutor'},
{ PrimeiroNome: 'Hanna', ultimoNome: 'Montana', funcao: 'Diretora'}];

const programadoras = users.filter(users => (users.funcao === 'Desenvolvedora' ));

console.log(programadoras)

// <------------------------------------ Exercicio 2 -------------------------------------------->

// 2. O map() funciona retornando uma nova array após a aplicação de uma função em todos os elementos da array.

// Dado um array de objetos chamado produtos.

// Retorne uma nova array com o id do produto, nome, tamanho e preço unitário que terá o acréscimo de 1.15 sobre o valor dos produtos. 
 
let produtos = [
{ id: 123, nome: 'Camiseta', cor: 'azul', tamanho: 'P', categoria: 'Vestuário', estoque: 10, disponivel: true, precoUnitario: 15 },
{ id: 125, nome: 'Regata', cor: 'azul', tamanho: 'GG', categoria: 'Vestuário', estoque: 0, disponivel: false, precoUnitario: 20 },
{ id: 456, nome: 'Calça', cor: 'preto', tamanho: 'GG', categoria: 'Vestuário', estoque: 1, disponivel: true, precoUnitario: 15 },
{ id: 982, nome: 'Tênis', cor: 'amarelo', tamanho: '38', categoria: 'Esportes', estoque: 2, disponivel: true, precoUnitario: 125 },
];

// --------------------------- Resposta 2  ------------------------------

// let acrescimoPreco = produtos.map((preco) => preco.precoUnitario * 1.15);

produtos.map((produto) =>{
        return {
            id: produto.id,
            preco: produto.precoUnitario * 1.15
        }
    })

let pegarProdutos = produtos.map( produtos => `id: ${produtos.id}, nome: ${produtos.nome}, tamanho: ${ produtos.tamanho}, preço unitário: ${produtos.preco}`);

console.log(pegarProdutos)


// <------------------------------ Exercicio 3 -------------------------------------->


// 3. reduce() é um método incrivelmente poderoso que nos permite combinar todo o resultado de uma array em um único resultado.

// Vamos utilizar um reducer pra extrair todos os livros do seguinte conjunto de dados:

// const dados = [
// {
//        "nome":"Tawany",
//         "livros":[
//          "Harry Potter",
//          "1984"]
// },
// {
//          "nome":"Suzelen",
//           "livros":[
//          "Capitões da Areia",
//           "Menina bonita do laço de fita"]
//}]




