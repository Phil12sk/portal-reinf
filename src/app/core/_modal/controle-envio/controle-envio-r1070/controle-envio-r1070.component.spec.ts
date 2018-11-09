import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEnviosR1070Component } from './table-envios-r1070.component';

describe('TableEnviosR1070Component', () => {
  let component: TableEnviosR1070Component;
  let fixture: ComponentFixture<TableEnviosR1070Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableEnviosR1070Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEnviosR1070Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
