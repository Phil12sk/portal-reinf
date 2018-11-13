import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaRegistroR2060Component } from './consulta-registro-r2060.component';

describe('ConsultaRegistroR2060Component', () => {
  let component: ConsultaRegistroR2060Component;
  let fixture: ComponentFixture<ConsultaRegistroR2060Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaRegistroR2060Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaRegistroR2060Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
