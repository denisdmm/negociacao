export class Negociacoes {
    constructor() {
        this.negociacoes = []; //-->  Negociacao [] = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return [...this.negociacoes];
    }
}
