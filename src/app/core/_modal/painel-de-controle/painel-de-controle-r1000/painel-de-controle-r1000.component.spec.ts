import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelDeControleR1000Component } from './painel-de-controle-r1000.component';

describe('PainelDeControleR1000Component', () => {
  let component: PainelDeControleR1000Component;
  let fixture: ComponentFixture<PainelDeControleR1000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelDeControleR1000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelDeControleR1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
