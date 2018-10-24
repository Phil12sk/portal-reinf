import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelDeControleComponent } from './painel-de-controle.component';

describe('PainelDeControleComponent', () => {
  let component: PainelDeControleComponent;
  let fixture: ComponentFixture<PainelDeControleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelDeControleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelDeControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
