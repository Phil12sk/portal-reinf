import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InclusaoRegistroR2060Component } from './inclusao-registro-r2060.component';

describe('InclusaoRegistroR2060Component', () => {
  let component: InclusaoRegistroR2060Component;
  let fixture: ComponentFixture<InclusaoRegistroR2060Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InclusaoRegistroR2060Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InclusaoRegistroR2060Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
