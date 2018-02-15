import { Injectable } from '@angular/core';
import { Etiqueta } from './entidades/etiqueta-contadora';

@Injectable()
export class EtiquetasContadorasService {

  constructor() { }
  
  getAll():Etiqueta[]{
    return [{
        ID: 1,
        cantidad: 4,
        frase: "Hijo de Dios"
      },{
        ID: 2,
        cantidad: 5,
        frase: "Va como piña"
      },{
        ID: 1,
        cantidad: 4,
        frase: "Delincuente"
      },
    ];
  }
}
