import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleRegistrosR1070Component } from './controle-registros-r1070.component';

describe('ControleRegistrosR1070Component', () => {
  let component: ControleRegistrosR1070Component;
  let fixture: ComponentFixture<ControleRegistrosR1070Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleRegistrosR1070Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleRegistrosR1070Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
