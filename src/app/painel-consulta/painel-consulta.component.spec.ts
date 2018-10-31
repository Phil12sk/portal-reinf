import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelConsultaComponent } from './painel-consulta.component';

describe('PainelConsultaComponent', () => {
  let component: PainelConsultaComponent;
  let fixture: ComponentFixture<PainelConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
