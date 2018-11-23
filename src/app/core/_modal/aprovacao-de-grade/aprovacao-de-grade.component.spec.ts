import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomecomponenteComponent } from './nomecomponente.component';

describe('NomecomponenteComponent', () => {
  let component: NomecomponenteComponent;
  let fixture: ComponentFixture<NomecomponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomecomponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomecomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
