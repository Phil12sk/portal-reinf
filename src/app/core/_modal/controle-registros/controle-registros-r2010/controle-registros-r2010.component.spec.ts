import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleRegistrosR2010Component } from './controle-registros-r2010.component';

describe('ControleRegistrosR2010Component', () => {
  let component: ControleRegistrosR2010Component;
  let fixture: ComponentFixture<ControleRegistrosR2010Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleRegistrosR2010Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleRegistrosR2010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
