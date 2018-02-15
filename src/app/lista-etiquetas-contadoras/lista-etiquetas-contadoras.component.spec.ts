import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEtiquetasContadorasComponent } from './lista-etiquetas-contadoras.component';

describe('ListaEtiquetasContadorasComponent', () => {
  let component: ListaEtiquetasContadorasComponent;
  let fixture: ComponentFixture<ListaEtiquetasContadorasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEtiquetasContadorasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEtiquetasContadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
