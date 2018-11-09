import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosPendentesComponent } from './painel-de-controle.component';

describe('EventosPendentesComponent', () => {
  let component: EventosPendentesComponent;
  let fixture: ComponentFixture<EventosPendentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosPendentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosPendentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
