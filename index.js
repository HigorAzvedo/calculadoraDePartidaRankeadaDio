let nivel = calcularNivel(50,10)
let newRanked = ranked()

function calcularNivel(vitorias = 0, derrotas = 0){
    let saldoDeVitorias = vitorias - derrotas
    return saldoDeVitorias
}

function ranked(){
    if(nivel < 10){
        return "Ferro"
    }else if(nivel < 20){
        return "Bronze"
    }else if(nivel < 50){
        return "Prata"
    }else if(nivel < 80){
        return "Ouro"
    }else if(nivel < 90){
        return "Diamante"
    }else if(nivel < 100){
        return "Lendario"
    }else {
        return "Imortal"
    }
}

console.log(`O Heroi tem saldo de ${nivel} e esta no nivel ${newRanked}`)