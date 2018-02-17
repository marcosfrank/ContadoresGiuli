import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cg-etiqueta-contadora-add',
  templateUrl: './etiqueta-contadora-add.component.html',
  styleUrls: ['./etiqueta-contadora-add.component.css']
})
export class EtiquetaContadoraAddComponent implements OnInit {
  frase:string;
  constructor() { }

  ngOnInit() {
  }

  guardar():void{
    alert(this.frase);
  }
}
