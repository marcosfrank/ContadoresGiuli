import { TestBed, inject } from '@angular/core/testing';

import { EtiquetasContadorasService } from './etiquetas-contadoras.service';

describe('EtiquetasContadorasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EtiquetasContadorasService]
    });
  });

  it('should be created', inject([EtiquetasContadorasService], (service: EtiquetasContadorasService) => {
    expect(service).toBeTruthy();
  }));
});
