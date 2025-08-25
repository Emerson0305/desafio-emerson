let nomeHeroi= "Batman"
let quantidadeXp = 900
let nivel= ""
if (quantidadeXp < 1000){
nivel = "Ferro"
console.log(nomeHeroi + " está começando sua jornada ")
}
else if (quantidadeXp >= 1001 && quantidadeXp <= 2000){
nivel= "Bronze"
console.log(" Você avançou mais um nivel " + nomeHeroi )
}
else if(quantidadeXp >= 2001 && quantidadeXp <= 5000){
    nivel = "Prata"
    console.log("Parabéns você está indo muito bem " + nomeHeroi )
}
else if (quantidadeXp >= 5001 && quantidadeXp <= 7000){
    nivel = "Ouro"
    console.log(" Que Incrível " + nomeHeroi )
}
else if (quantidadeXp >= 7001 && quantidadeXp <= 8000){
    nivel = "Platina"
    console.log("Que fantástico " + nomeHeroi)
}
else if (quantidadeXp >=8001 && quantidadeXp <= 9000){
    nivel = "Ascendente"
    console.log("Você está indo muito bem " + nomeHeroi )
}
else if (quantidadeXp >=9001 && quantidadeXp <= 10000){
    nivel = "Imortal"
    console.log(nomeHeroi + " você alcançou mais um nível " )
} 
else if(quantidadeXp >= 10001){
    nivel = "Radiante"
    console.log(" Parabéns " + nomeHeroi + " você chegou ao último nível ")
}
else {
console.log("Você precisa melhorar para avançar seu nível")
}
console.log("O heroí de nome " + nomeHeroi + " está no nível " + nivel)

