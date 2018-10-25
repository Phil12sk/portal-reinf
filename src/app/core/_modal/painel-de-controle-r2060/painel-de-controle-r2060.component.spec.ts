import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelDeControleR2060Component } from './painel-de-controle-r2060.component';

describe('PainelDeControleR2060Component', () => {
  let component: PainelDeControleR2060Component;
  let fixture: ComponentFixture<PainelDeControleR2060Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelDeControleR2060Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelDeControleR2060Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
