import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { R2010Component } from './r2010.component';

describe('R2010Component', () => {
  let component: R2010Component;
  let fixture: ComponentFixture<R2010Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ R2010Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(R2010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
