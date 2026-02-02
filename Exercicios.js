const inventario = [
    { id: 1, nome: "Teclado Mecânico RGB", preco: 85, categoria: ["Informática", "Periféricos"], emStock: true },
    { id: 2, nome: "Frigideira a Ar (Air Fryer)", preco: 110, categoria: ["Eletrodomésticos", "Cozinha"],emStock: true },
    { id: 3, nome: "Cadeira de Escritório Ergonómica", preco: 180, categoria: ["Escritório","Mobiliário"], emStock: false },
    { id: 4, nome: "Ecrã Curvo 27' 144Hz", preco: 250, categoria: ["Informática", "Ecrãs"], emStock:true },
    { id: 5, nome: "Máquina de Café de Cápsulas", preco: 75, categoria: ["Eletrodomésticos","Cozinha"], emStock: true },
    { id: 6, nome: "Caderno Inteligente A5", preco: 30, categoria: ["Escritório", "Papelaria"], emStock:true },
    { id: 7, nome: "Trotinete Elétrica", preco: 450, categoria: ["Lazer", "Mobilidade"], emStock: false },
    { id: 8, nome: "Rato Sem Fios Vertical", preco: 55, categoria: ["Informática", "Periféricos"], emStock: true }
];

console.log("----------EX.01-------------"); 

// const comStock = inventario.filter(stocks => stocks.emStock === true);
// console.log(comStock);

function comStock (array, parametro){
    return array.filter(stocks => stocks[parametro] === true);
}

console.log(comStock(inventario, "emStock"));


console.log("----------EX.02-------------"); 

// const filtroStockPreco = inventario.filter(produto => produto.emStock && produto.preco < 100); 
// console.log(filtroStockPreco)

function filtroStockPreco (array, parametro1, parametro2){
    return array.filter(produto => produto[parametro1] && produto[parametro2] < 100);
}
console.log(filtroStockPreco(inventario, "emStock", "preco"));


