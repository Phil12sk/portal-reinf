import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleIntegracoesComponent } from './controle-integracoes.component';

describe('ControleIntegracoesComponent', () => {
  let component: ControleIntegracoesComponent;
  let fixture: ComponentFixture<ControleIntegracoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleIntegracoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleIntegracoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
