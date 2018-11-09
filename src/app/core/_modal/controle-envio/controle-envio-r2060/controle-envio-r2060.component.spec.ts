import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEnviosR2060Component } from './table-envios-r2060.component';

describe('TableEnviosR2060Component', () => {
  let component: TableEnviosR2060Component;
  let fixture: ComponentFixture<TableEnviosR2060Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableEnviosR2060Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEnviosR2060Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
