/*Dado um array de objetos.
*/

const tarefas = [{
  passear: false,
  afazeres: ["Trabalhar", "Estudar", "Fazer comida", "Mercado","Descansar"],
  reuniao: {
    faculdade: "Segunda-feira",
    amigos: "Sexta-feira"
  },
},
];

/* Acesse a propriedade do objeto do terceiro item*/
<<<<<<< HEAD
const acessoObj = tarefas[0].reuniao

console.log(acessoObj)
=======

//variável auxiliadora para fazermos a analise
let acessarTarefas = tarefas[0].reuniao;

//acessar o primeiro item que contém a propriedade reunião.
console.log(acessarTarefas)
>>>>>>> e39ff83db64ec55467160ce2829450406d9b085e
