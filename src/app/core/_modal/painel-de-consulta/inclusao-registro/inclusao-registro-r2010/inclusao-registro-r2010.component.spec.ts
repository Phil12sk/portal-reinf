import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InclusaoRegistroR2010Component } from './inclusao-registro-r2010.component';

describe('InclusaoRegistroR2010Component', () => {
  let component: InclusaoRegistroR2010Component;
  let fixture: ComponentFixture<InclusaoRegistroR2010Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InclusaoRegistroR2010Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InclusaoRegistroR2010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
