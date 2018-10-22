import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { R2060Component } from './r2060.component';

describe('R2060Component', () => {
  let component: R2060Component;
  let fixture: ComponentFixture<R2060Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ R2060Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(R2060Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
