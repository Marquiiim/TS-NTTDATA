type Carro = {
    modelo?: string
    ano: number
}

function toJSON(obj: any) {
    return JSON.stringify(obj)
}

function fromJSON<T>(json: string) {
    return JSON.parse(json) as T
}

const carro: Carro = {
    modelo: "MacLaren",
    ano: 2025
}

const carroJSON = `{"modelo":"MacLaren","ano":2025}`


console.log(fromJSON<Carro>(carroJSON).ano)