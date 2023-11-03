let level = calcLevel(100,10)
let newRanked = ranked()

function calcLevel(wins = 0, defeats = 0){
    let WinBalance = wins - defeats
    return WinBalance
}

function ranked(){
    if(level < 10){
        return "Ferro"
    }else if(level < 20){
        return "Bronze"
    }else if(level < 50){
        return "Prata"
    }else if(level < 80){
        return "Ouro"
    }else if(level < 90){
        return "Diamante"
    }else if(level < 100){
        return "Lendario"
    }else {
        return "Imortal"
    }
}

console.log(`O Heroi tem saldo de ${level} e esta no nivel ${newRanked}`)