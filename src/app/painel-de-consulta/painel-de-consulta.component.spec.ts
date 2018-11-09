import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelDeConsultaComponent } from './painel-de-consulta.component';

describe('PainelConsultaComponent', () => {
  let component: PainelDeConsultaComponent;
  let fixture: ComponentFixture<PainelDeConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelDeConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelDeConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
