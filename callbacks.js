// function soma (numero1, numero2){
//     return numero1 + numero2;
// }

// function subtrair (numero1, numero2){
//     return numero1 - numero2;
// }

// function multiplicar (numero1, numero2){
//     return numero1 * numero2;
// }

// function dividir (numero1, numero2){
//     return numero1 / numero2;
// }

// function hof (numero1, numero2, operacao){
//     return operacao(numero1, numero2); 
// }

// console.log("Operação Soma = " + hof(23, 24, soma));
// console.log("Operação Subtrair = " + hof(23, 24, subtrair));
// console.log("Operação Multiplicar = " + hof(23, 24, multiplicar));
// console.log("Operação Dividir = " + hof(50, 10, dividir));

//console.log("---------------ForEach---------------")
// //1. Usando uma função anónima; 
// const frutas = ["maçã", "banana", "cereja", "pêra", "uva", 
//     "laranja", "melância", "abacaxi"]; 

// frutas.forEach(function(listaDeFrutas, index){
//     console.log("Index: " + index, "Frutas:" + listaDeFrutas);
// })

// frutas.forEach(function(fruta){
//     console.log("For Each Anónima:" + fruta);
// })

// /////
// const notas = [7.5, 8.0,6.5, 9.0, 5.5]; 

// let media = 7.3; 

// notas.forEach(function(notas, index){ // ele faz automaticamente o indíce por mim, eu não preciso de colocar o index 
    
//     if (notas >= media){
//         console.log("Notas" + notas, "Indíce: " + index)
//     }
// })

// console.log("-----------------Map-----------------"
// const numeros = [1, 2, 3 ]; 
// const resultado = numeros.map(n => n * 2);

// const precosEmEuros = [10, 20, 30, 40, 50]; 
// const cotacaoEuroReal = 6.21; 

// // const precosEmReal = precosEmEuros.map(function(precoEmEuros){
// //     return precoEmEuros * cotacaoEuroReal;
// // });

// console.log("Preços em real:", 
//     precosEmReal.toLocaleString('pt-Br',{ style: 'currency', currency: 'BR'}));


// const precosEmRealComIndex = precosEmEuros.map(function(precoEmEuro, index){
//     let precoEmReal = precoEmEuro * cotacaoEuroReal; 
//         console.log("index: ", index, "Preçoem Euro:", 
//                 precoEmEuro.toLocaleString('pt-Pt', {style: 'currency', currency: 'EUR'}), 
//                 "Preço em Real", precoEmReal.toLocaleString('pt-Br', 
//                     {style: 'currency', currency: 'BRL'}));
// })

//////
// const dados = [1, 7, 10, 44, 12, 59]; 

// const parOuImpar = dados.map(function(numero){
//     const resto = numero % 2; 
//     if (resto === 0){
//         console.log(numero, "é par");
//     }else {
//         console.log(numero, "é impar"); 
//     }
// })

// console.log("---------------FILTER----------------");

// // const pares = numeros
// //     .filter( n => n % 2 === 0);

// const idades = [12, 18, 25, 10, 30]; 

// const maiorDeIdade = idades.filter(idade => idade >= 18);
// const menorDeIdade = idades.filter (idade => idade <18); 

// console.log(`Maior de Idade legal: ${maiorDeIdade}`);
// console.log(`Maior de Idade legal: ${menorDeIdade}`);


// const produtos = [
//     {artigo: "camisa", preco: 15.999},
//     {artigo: "boné", preco: 38},
// ];

// const filtroporPreco = produtos.filter(precos => precos.produto < 50)

// console.log(filtroporPreco);

// const produtosEmOferta= [
//     {nome: "Camisa", preco: 60, oferta: false}, 
//     {nome:"Meias", preco: 10, oferta: true}, 
//     {nome: "Boné", preco: 23, oferta: true}
// ]

// const filtroOferta = produtosEmOferta.filter((produto) => produto.oferta === true);
// console.log(filtroOferta);

// const filtroProdutos10 = produtosEmOferta.filter((produto) => produto.oferta && produto.preco >= 10);
// console.log(filtroProdutos10);

// console.log("----------------FIND-------------")

// // const encontrado = numeros.find (n => 2)

// const formandos=["Pedro", "Ana", "Catarina", "João", "Miguel", "Catarina"]

// const utilizadorEncontrado = formandos.find(nomeFormando => nomeFormando === "Catarina"); 
// console.log(`Òlá ${utilizadorEncontrado}`);

// const utilizadorNaoEncontrado = formandos.find(nomeFormando => nomeFormando === "Paula");
// console.log(`Òlá ${utilizadorNaoEncontrado}`);

// console.log("----------------SOME E EVERY-------------")

// const notas = [12, 15, 8, 19, 11]; 

// const abaixoDe10 = notas.some(nota => nota < 10); 

// console.log(`Algum aluno foi pra recurso? ${abaixoDe10? 'Sim' : 'Não'} `)

// const todosAprovados = notas.every(nota => nota >= 10);
// console.log(`Todos os alunos foram aprovados? ${todosAprovados ? 'Sim': 'Não'}`);

// console.log("----------------REDUCE-------------")

// // // Array.reduce((acumulador,valorAtual) => {
// // //     return novoValor; 
// // // }, valorInicial);

// // const precos = [10, 20, 30]; 

// // const totalCarrinho = precos.reduce(function (acumulado, valorAtual){
// //     return acumulado + valorAtual;
// // });

// // console.log(`O total da compra será de: ${totalCarrinho}`);

// const inflacaoMensal = [0.9, 0.1, 0.2, 1.2, -0.87, -0.32, 0.2, 0.95, 0.3, 0.12, 0.17, 0.76]

// const inflacaoTotal = inflacaoMensal.reduce(function (soma, valorAtual){
//     return soma + valorAtual
// }); 

// console.log(inflacaoTotal);

// console.log("----------SPREAD------------")

// const frutas = ["Maçã", "banana"]; 

// const novasFrutas = [...frutas, "Pera"]; 

// console.log(`Frutas: ${frutas}, array original com ${novasFrutas}, novas frutas`);


// // let programacao = ["JavaScript", "Java", "C++", "C#"]; 

// const novaProgramacao =
//  [...programacao.slice(0,1), "Typescript", 
//     ...programacao.slice(2,3)];

// console.log(novaProgramacao);

function faturamentoCompras(cliente, itens){
    console.log(`Faturamento para: ${cliente}`);
    console.log(`Faturamento para: ${itens}`);
}

faturamentoCompras("Rodrigo", "Camisa", "Telemóve", "Portátil", "KinderBueno");