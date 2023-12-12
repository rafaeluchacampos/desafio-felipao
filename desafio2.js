let result = numberOfVictories(10, 5)
let ranking = rankingOfPlayer(result)

console.log("O Herói tem de saldo de %d e está no nível de %s", result, ranking)


function numberOfVictories(victories, losses){
    let sum = victories - losses
    return sum
}

function rankingOfPlayer(result){
   if (result <= 10){
        return "Ferro"
    }else if (result > 10 && result <= 20){
        return "Bronze"
    }else if (result > 20 && result <= 50){
        return "Prata"
    }else if (result > 50 && result <= 80){
        return "Ouro"
    }else if (result > 80 && result <= 90){
        return "Diamante"
    }else if (result > 90 && result <= 100){
        return "Lendário"
    }else{
        return "Imortal"
    }
}
