import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtiquetaContadoraComponent } from './etiqueta-contadora.component';

describe('EtiquetaContadoraComponent', () => {
  let component: EtiquetaContadoraComponent;
  let fixture: ComponentFixture<EtiquetaContadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtiquetaContadoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtiquetaContadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
