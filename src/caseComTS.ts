type Hero = {
    nome: string;
    vulgo: string;
    telefone: string;
}

function ligarPara(heroi: Hero) {
    return `Ligando para: ${heroi.telefone}`
}

ligarPara({
    nome: "Marquim",
    vulgo: "Capitão América",
    telefone: "85 111222333"
})