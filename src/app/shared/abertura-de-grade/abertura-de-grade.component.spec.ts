import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AberturaDeGradeComponent } from './abertura-de-grade.component';

describe('AberturaDeGradeComponent', () => {
  let component: AberturaDeGradeComponent;
  let fixture: ComponentFixture<AberturaDeGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AberturaDeGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AberturaDeGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
