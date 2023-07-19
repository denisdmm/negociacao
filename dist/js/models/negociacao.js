export class Negociacao {
    // private _data : Date;    //NO TYPE SCRIPT PODE SER REMOVIDO SE ELA FIZER PARTE DO CONSTRUTOR
    // private _quantidade: number;
    //  private _valor: number;
    constructor(_data, // não precisa criar o get, pois ela so pode ser instanciada na criação e nao sera mais modificada
    quantidade, _valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this._valor = _valor;
    }
    get data() {
        const data = new Date(this._data.getTime()); // programação defenciva para que nao se possa alterar a data apos ela se criada
        return data;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this.quantidade * this._valor;
    }
}
