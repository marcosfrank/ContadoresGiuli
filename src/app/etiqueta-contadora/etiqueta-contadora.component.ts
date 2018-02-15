import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'cg-etiqueta-contadora',
  templateUrl: './etiqueta-contadora.component.html',
  styleUrls: ['./etiqueta-contadora.component.css']
})
export class EtiquetaContadoraComponent implements OnInit {
  @Input() frase:string;
  @Input() cantidad:number;
  @Input() id:number;

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }
  
  addCantidad() : void {
    this.cantidad++;
    this.toastr.success(`Has sumado una ocurrencia a la frase. Lo ha repetido ${this.cantidad} veces.`, this.frase);
  }

  

}
