import { Component, OnInit } from '@angular/core';
import { EtiquetasContadorasService } from '../etiquetas-contadoras.service';
import { Etiqueta } from '../entidades/etiqueta-contadora';

@Component({
  selector: 'cg-lista-etiquetas-contadoras',
  templateUrl: './lista-etiquetas-contadoras.component.html',
  styleUrls: ['./lista-etiquetas-contadoras.component.css']
})
export class ListaEtiquetasContadorasComponent implements OnInit {
  etiquetas:Etiqueta[];
  
  constructor(private etiquetasService: EtiquetasContadorasService) { }

  ngOnInit() {
    this.etiquetas = this.etiquetasService.getAll();
  }

}
