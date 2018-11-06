import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEnviosR2010Component } from './table-envios-r2010.component';

describe('TableEnviosR2010Component', () => {
  let component: TableEnviosR2010Component;
  let fixture: ComponentFixture<TableEnviosR2010Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableEnviosR2010Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEnviosR2010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
