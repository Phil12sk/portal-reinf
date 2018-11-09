import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEnviosR5011Component } from './table-envios-r5011.component';

describe('TableEnviosR5011Component', () => {
  let component: TableEnviosR5011Component;
  let fixture: ComponentFixture<TableEnviosR5011Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableEnviosR5011Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEnviosR5011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
