import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaRegistroR1000Component } from './consulta-registro-r1000.component';

describe('ConsultaRegistroR1000Component', () => {
  let component: ConsultaRegistroR1000Component;
  let fixture: ComponentFixture<ConsultaRegistroR1000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaRegistroR1000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaRegistroR1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
