import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEnviosR2099Component } from './table-envios-r2099.component';

describe('TableEnviosR2099Component', () => {
  let component: TableEnviosR2099Component;
  let fixture: ComponentFixture<TableEnviosR2099Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableEnviosR2099Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEnviosR2099Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
