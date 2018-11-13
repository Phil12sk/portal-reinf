import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaRegistroR1070Component } from './consulta-registro-r1070.component';

describe('ConsultaRegistroR1070Component', () => {
  let component: ConsultaRegistroR1070Component;
  let fixture: ComponentFixture<ConsultaRegistroR1070Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaRegistroR1070Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaRegistroR1070Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
