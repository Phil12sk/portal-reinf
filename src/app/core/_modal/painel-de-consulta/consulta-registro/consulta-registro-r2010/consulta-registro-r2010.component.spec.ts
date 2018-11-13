import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaRegistroR2010Component } from './consulta-registro-r2010.component';

describe('ConsultaRegistroR2010Component', () => {
  let component: ConsultaRegistroR2010Component;
  let fixture: ComponentFixture<ConsultaRegistroR2010Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaRegistroR2010Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaRegistroR2010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
