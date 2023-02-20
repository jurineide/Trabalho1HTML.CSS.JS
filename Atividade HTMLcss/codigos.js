var nomeDoProdutos = "bode";
var precoDoProduto = 1500;
var descontoDoProduto =  100;
var descontoDoProduto2 = 50;
var descontoValido = new Boolean(true);
var precoFinal;
var lucroTotal = 0;

if(descontoValido == true){
    precoFinal = precoDoProduto - descontoDoProduto ;
    console.log(precoFinal);
} else {
    precoFinal = precoDoProduto;
    console.log(precoFinal);
}

if(precoFinal > 1000){
    precoFinal -= descontoDoProduto2;
    console.log(precoFinal);
} else{
    console.log(precoFinal);
}

 const demandas = [10,2,1,30,5];
 const totalGastoCliente = [];

demandas.forEach(function(item, indice, array) {
    console.log(`O cliente ${indice + 1}` + ` deverá pagar ${item * precoFinal}`);
    totalGastoCliente.push(item * precoFinal);
})

console.log(totalGastoCliente);

for(var i = 0; i < totalGastoCliente.length ; i++){
    lucroTotal += totalGastoCliente[i]
}

console.log("O total de lucro é: " + lucroTotal);
console.log("Agradecemos por usar os nossos serviços.")
