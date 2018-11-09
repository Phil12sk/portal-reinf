import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelDeControleR2010Component } from './painel-de-controle-r2010.component';

describe('PainelDeControleComponent', () => {
  let component: PainelDeControleR2010Component;
  let fixture: ComponentFixture<PainelDeControleR2010Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelDeControleR2010Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelDeControleR2010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
