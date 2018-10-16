import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleEnvioComponent } from './controle-envio.component';

describe('ControleEnvioComponent', () => {
  let component: ControleEnvioComponent;
  let fixture: ComponentFixture<ControleEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
