import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarEnvioComponent } from './solicitar-envio.component';

describe('SolicitarEnvioComponent', () => {
  let component: SolicitarEnvioComponent;
  let fixture: ComponentFixture<SolicitarEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitarEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
