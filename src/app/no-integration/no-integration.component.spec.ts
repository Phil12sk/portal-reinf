import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoIntegrationComponent } from './no-integration.component';

describe('NoIntegrationComponent', () => {
  let component: NoIntegrationComponent;
  let fixture: ComponentFixture<NoIntegrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoIntegrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
