import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEnviosComponent } from './table-envios.component';

describe('TableEnviosComponent', () => {
  let component: TableEnviosComponent;
  let fixture: ComponentFixture<TableEnviosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableEnviosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEnviosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
