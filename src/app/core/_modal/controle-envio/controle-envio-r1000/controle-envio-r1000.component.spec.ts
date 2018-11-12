import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleEnvioR1000Component } from './controle-envio-r1000.component';

describe('TableEnviosR1000Component', () => {
  let component: ControleEnvioR1000Component;
  let fixture: ComponentFixture<ControleEnvioR1000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleEnvioR1000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleEnvioR1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
