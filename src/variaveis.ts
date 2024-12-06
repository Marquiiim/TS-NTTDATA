// Tipos primitivos: BOOLEAN, NUMBER, STRING
let ligado: boolean = false
let nome: string = "Marquim"
let idade: number = 18
let altura: number = 1.9

// Tipos especiais: NULL, UNDEFINED
let nulo: null = null
let indefinido: undefined = undefined

// Tipos abrangentes: ANY, VOID
let retorno: void
let retornoView: any = false

// OBJETO SEM PREVISIBILIDADE
let pessoa: object = {
    name: "Marquim",
    idade: 18,
    cor: "Pardo"
}

// OBJETO TIPADO COM PREVISIBILIDADE
type Produto = {
    nome: string
    valor: number
    unidades: number
}

let meuProduto: Produto = {
    nome: "Iphone 16",
    valor: 9000,
    unidades: 2
}

// ARRAYS
let dados: string[] = ["Marquim", "Gabriel"]
let dados2: Array<string> = ["Biel", "Xavier"]

let infos: (string | number)[] = ["Marquinhos", 18]

// TUPLAS
let boleto: [string, number, number] = ["Água", 990, 999]

// ARRAYS MÉTODOS
dados.pop()

// DATAS
let aniversario: Date = new Date("2022-12-01 05:00")
console.log(aniversario.toString())