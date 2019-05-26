import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastEventsComponent } from './forecast-events.component';

describe('ForecastEventsComponent', () => {
  let component: ForecastEventsComponent;
  let fixture: ComponentFixture<ForecastEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
