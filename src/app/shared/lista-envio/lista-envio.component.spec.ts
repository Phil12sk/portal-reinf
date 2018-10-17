import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEnvioComponent } from './lista-envio.component';

describe('ListaEnvioComponent', () => {
  let component: ListaEnvioComponent;
  let fixture: ComponentFixture<ListaEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
