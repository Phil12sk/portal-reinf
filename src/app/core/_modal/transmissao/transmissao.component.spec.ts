import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmissaoComponent } from './transmissao.component';

describe('TransmissaoComponent', () => {
  let component: TransmissaoComponent;
  let fixture: ComponentFixture<TransmissaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransmissaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransmissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
