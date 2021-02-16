var imagens = {
    nome: ["BTC", "LTC", "NMC", "TRC", "PPC", "FTC", "FRC", "IXC", "DGC", "GLC"],
    local: ["assets/bitcoin.jfif", "assets/litecoin.jfif", "assets/namecoin.jfif", "assets/terracoin.png", "assets/peercoin.jfif", 
    "assets/feathercoin.jfif", "assets/freicoin.png", "assets/ixcoin.png", "assets/digitalcoin.jfif", "assets/goldcoin.jfif"]
};
var valores = [];
//var simbolos = ["BTC", "LTC", "NMC", "TRC", "PPC", "FTC", "FRC", "IXC", "DGC", "GLC"]; Não precisa mais desse

for(let i = 0; i < 10; i++){
    fetch(`https://www.mercadobitcoin.net/api/${imagens.nome[i]}/ticker/`)
.then((response) => {
    if(!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
    return response.json();
})
.then((api2) => {   
    valores[i] = parseFloat(api2.ticker.last).toFixed(2); //Assim, mesmo o processo sendo de forma assíncrona, os resultados sairão como se fosse síncrona.
    
})
.catch((error) => {
console.error(error.message);
valores[i] = "Valor não encontrado"; //Assim, mesmo o processo sendo de forma assíncrona, os resultados sairão como se fosse síncrona.
})
console.log(i) //Teste para ver se todos os ciclos estão funcionando
}

console.log(valores); //Teste para ver se a ordem dos valores estão certas