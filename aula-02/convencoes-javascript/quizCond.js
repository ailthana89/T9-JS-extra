// Quiz - Aula 2 - Estruturas Condicionais

// Aqui você vai utilizar em determinadas situações:
// if
// else if
// else
// switch case

// 1. Escreva uma função chamada compararNumero que receberá dois parâmetros,
// em seguida, retorne o número que for maior.

// O retorno deverá conter essa mensagem:

// "O maior número entre 5 e 10 é 10"

// Passo a passo da função:
// - Criar função compararValor(parametro1, parametro2)
// - Inserir uma condição onde parametro1 é maior que parametro dois?
// - Se a condição for verdadeira, retornar "O maior número entre 5 e 10 é 10"
// - Se for falsa, retornar que a segundo parametro é maior que o primeiro.

function compararNumero (maiorNum, menorNum){
    if(maiorNum > menorNum){
        return `O maior número entre ${menorNum} e ${maiorNum} é ${maiorNum}`
    }else{
        return `O ${maiorNum} é maior que ${menorNum}`
    }
}

// console.log(compararNumero(2, 5))
// console.log(compararNumero(10, 6))
// console.log(compararNumero(5,10))

// 2. Escreva uma função chamada retornarNota que receberá um parâmetro do tipo número:

// A função deve retornar com as seguintes notas:
// Se a pontuação for maior que 90, retornar: "A"
// Se a pontuação for maior que 80, retornar: "B"
// Se a pontuação for maior que 70, retornar: "C"
// Se a pontuação for maior que 65, retornar: "D"
// ou "F" 

function retornarNota (pontuacao){
    if(pontuacao > 90){
        return `A`
    }else if (pontuacao > 80){
        return `B`
    }else if (pontuacao > 70){
        return `C`
    }else if (pontuacao > 65){
        return `D`
    }else{
        return `F`
    }
}
console.log(retornarNota(100))
console.log(retornarNota(85))
console.log(retornarNota(72))
console.log(retornarNota(68))
console.log(retornarNota(10))

// 3. Crie uma estrutura switch case na qual armazene o dia da semana
// em que estamos em uma variável auxiliadora.

// Você precisará de uma variável para armazenar,
// durante os cases, o dia da semana.

// Cada dia da semana pode ser um valor:
// 0        1       2      3       4       5      6
// dom   seg   ter  quar quin  sext  sab

// Para você conseguir pegar a data de hoje,
// utilize o (new Date().getDay()) como parâmetro.

// Onde
// case 0:
// diaSemana = "Domingo";
// break;
// case 1:

let diaSemana = new Date().getDay();

switch (diaSemana){
    case 0:
        diaSemana = 'Domingo';
    break
    case 1:
        diaSemana = 'Segunda-feira';
    break
    case 2:
        diaSemana = 'Terça-feira';
    break
    case 3:
        diaSemana = 'Quarta-feira';
    break
    case 4:
        diaSemana = 'Quinta-feira';
    break
    case 5:
        diaSemana = 'Sexta-feira';
    break
    case 6:
        diaSemana = 'Sábado';
    break

    default:
        'Não é um dia válido'
}

console.log(diaSemana)


// 4. Plano de Viagem:

// Na Agência Turismo é viver, existem alguns planos
// de viagens de acordo com a idade da pessoa.

// A tabela é:

// PLANO TEEN: A partir de 12 anos até 17 anos.
// PLANO PROFISSIONAL: A partir de 18 anos até 29 anos.
// PLANO EXPERIENTE: A partir de 30 anos.

// Faça uma função chamada obterPlanos que receba apenas um parâmetro
// e insira essas condições dentro da função.
// Se não inserirem um valor de acordo com as idades,
// é para retornar: Entrar em contato com a agência de turismo.

// Aqui você pode utilizar:
// If/ else if

// A saída deverá ser algo parecido com:

// obterPlano(12) //SAÍDA: Você pode verificar os nossos pacotes TEEN.
    

function obterPlanos (faixaEtaria){
        if(faixaEtaria >= 12 && faixaEtaria <= 17){
            return 'Plano Teen'
        }else if(faixaEtaria >= 18 && faixaEtaria <= 29){
            return 'Plano Profissional'
        }else if(faixaEtaria >= 30){
            return 'Plano Experiente'
        }else{
            return 'Entrar em contato com a agência de turismo'
        }
    
        }
    console.log(obterPlanos(14))
    console.log(obterPlanos(20))
    console.log(obterPlanos(35))
    console.log(obterPlanos(29))