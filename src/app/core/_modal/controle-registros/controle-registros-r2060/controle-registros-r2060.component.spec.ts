import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleRegistrosR2060Component } from './controle-registros-r2060.component';

describe('ControleRegistrosR2060Component', () => {
  let component: ControleRegistrosR2060Component;
  let fixture: ComponentFixture<ControleRegistrosR2060Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleRegistrosR2060Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleRegistrosR2060Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
