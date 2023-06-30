import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioImovelComponent } from './formulario-imovel.component';

describe('FormularioImovelComponent', () => {
  let component: FormularioImovelComponent;
  let fixture: ComponentFixture<FormularioImovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioImovelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioImovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
