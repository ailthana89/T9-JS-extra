//Crie uma função que dado o objeto a seguir com o parâmetro nome e sobrenome:
/*Retorne o seguinte conteúdo:
A {nome} {Sobrenome} mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
nº 1293.
O retorno deverá ser template string*/


function dados (nome, sobrenome) {  
  const endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
  }

  return `A ${nome} ${sobrenome} mora em São Paulo/SP, no bairro Centro, 
  na rua "Rua dos Pinheiros" com nº 1293`
}
 
console.log(dados('Nathalia', 'Silva'))






//   return `A ${nome} ${sobrenome} mora em ${endereco.cidade} / ${endereco.uf}, 
//   no bairro ${endereco.bairro}, na rua ${endereco.rua} com
//   nº ${endereco.numero}.`
// }

// console.log(dados('Nathalia', 'Silva'))



