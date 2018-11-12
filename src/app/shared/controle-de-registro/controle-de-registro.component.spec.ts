import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleDeRegistroComponent } from './controle-de-registro.component';

describe('ControleIntegracoesComponent', () => {
  let component: ControleDeRegistroComponent;
  let fixture: ComponentFixture<ControleDeRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleDeRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleDeRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
