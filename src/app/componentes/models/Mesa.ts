export interface Mesa{
    id: string,
    nome: string,
    reservado: boolean,
    reservaName: string,
    itemList: Item[],
    status: string[],
    obs: string
}

export interface Item{
    id: string,
	descricao: string
	quantidade: number,
	valorUnitario: number,
	valorTotal: number
}