import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEnviosR9000Component } from './table-envios-r9000.component';

describe('TableEnviosR9000Component', () => {
  let component: TableEnviosR9000Component;
  let fixture: ComponentFixture<TableEnviosR9000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableEnviosR9000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEnviosR9000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
