import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InclusaoRegistroR1070Component } from './inclusao-registro-r1070.component';

describe('InclusaoRegistroR1070Component', () => {
  let component: InclusaoRegistroR1070Component;
  let fixture: ComponentFixture<InclusaoRegistroR1070Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InclusaoRegistroR1070Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InclusaoRegistroR1070Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
