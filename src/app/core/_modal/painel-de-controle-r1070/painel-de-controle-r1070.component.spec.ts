import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelDeControleR1070Component } from './painel-de-controle-r1070.component';

describe('PainelDeControleR1070Component', () => {
  let component: PainelDeControleR1070Component;
  let fixture: ComponentFixture<PainelDeControleR1070Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelDeControleR1070Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelDeControleR1070Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
