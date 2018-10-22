import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { R1000Component } from './r1000.component';

describe('R1000Component', () => {
  let component: R1000Component;
  let fixture: ComponentFixture<R1000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ R1000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(R1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
