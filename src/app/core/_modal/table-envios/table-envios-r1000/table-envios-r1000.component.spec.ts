import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEnviosR1000Component } from './table-envios-r1000.component';

describe('TableEnviosR1000Component', () => {
  let component: TableEnviosR1000Component;
  let fixture: ComponentFixture<TableEnviosR1000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableEnviosR1000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEnviosR1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
