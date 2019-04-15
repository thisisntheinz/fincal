import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastEventComponent } from './forecast-event.component';

describe('ForecastEventComponent', () => {
  let component: ForecastEventComponent;
  let fixture: ComponentFixture<ForecastEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
