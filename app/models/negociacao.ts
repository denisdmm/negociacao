export class Negociacao {
    // private _data : Date;    //NO TYPE SCRIPT PODE SER REMOVIDO SE ELA FIZER PARTE DO CONSTRUTOR
    // private _quantidade: number;
    //  private _valor: number;

    constructor(
        private _data:Date,  // não precisa criar o get, pois ela so pode ser instanciada na criação e nao sera mais modificada
        public readonly quantidade:number, 
        public readonly valor:number){

     }

    get data(): Date {
        const data = new Date(this._data.getTime()); // programação defenciva para que nao se possa alterar a data apos ela se criada
        return data;
    }

    get volume(): number{
        return this.quantidade * this.valor;
    }

}