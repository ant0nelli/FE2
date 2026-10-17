interface Tarefa {
    id: number
    titulo: string
    descricao?: string
    status: string
}

type Status = "a fazer" | "fazendo" | "feito"

export { type Tarefa, type Status}