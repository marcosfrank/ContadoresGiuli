import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtiquetaContadoraAddComponent } from './etiqueta-contadora-add.component';

describe('EtiquetaContadoraAddComponent', () => {
  let component: EtiquetaContadoraAddComponent;
  let fixture: ComponentFixture<EtiquetaContadoraAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtiquetaContadoraAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtiquetaContadoraAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
