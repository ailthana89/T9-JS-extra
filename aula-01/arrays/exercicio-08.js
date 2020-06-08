/*Dado um array de objetos.
*/

const tarefas = [{
  passear: false,
  afazeres: ["Trabalhar", "Estudar", "Fazer comida", "Mercado","Descansar"],
  reuniao: {
    faculdade: "Segunda-feira",
    amigos: "Sexta-feira"
  }
}];

/* Acesse a propriedade do objeto do terceiro item*/
const acessoObj = tarefas[0].reuniao

console.log(acessoObj)