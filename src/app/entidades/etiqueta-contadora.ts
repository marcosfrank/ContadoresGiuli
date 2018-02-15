export class Etiqueta{
    ID:number;
    frase:string;
    cantidad:number;    

    /**
     *
     */
    constructor(id:number, frase:string, cantidad:number) {
        this.ID = id;
        this.cantidad = cantidad;
        this.frase = frase;        
    }
}