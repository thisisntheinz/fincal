import { Component, OnInit, Input } from '@angular/core';
import { ForecastEvent } from '../../classes/forecast-event';
import { Transaction } from 'src/app/classes/transaction';

@Component({
  selector: 'app-forecast-event',
  templateUrl: './forecast-event.component.html',
  styleUrls: ['./forecast-event.component.sass']
})
export class ForecastEventComponent implements OnInit {

  constructor() { }

  @Input()
  forecastEvent: ForecastEvent | null;

  ngOnInit() {
    if (this.forecastEvent == null) {
      this.forecastEvent = new ForecastEvent();
      this.forecastEvent.transactions = [
        new Transaction('test 1'),
        new Transaction('test 2')
      ];
      this.forecastEvent.balance = 1.11;
      this.forecastEvent.when = new Date();
    }
  }
}
