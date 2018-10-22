import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { R1070Component } from './r1070.component';

describe('R1070Component', () => {
  let component: R1070Component;
  let fixture: ComponentFixture<R1070Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ R1070Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(R1070Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
