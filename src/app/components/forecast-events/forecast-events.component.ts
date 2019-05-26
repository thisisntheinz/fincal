import { Component, OnInit, Input } from '@angular/core';
import { ForecastEvent } from 'src/app/classes/forecast-event';
import { Transaction } from 'src/app/classes/transaction';

@Component({
  selector: 'app-forecast-events',
  templateUrl: './forecast-events.component.html',
  styleUrls: ['./forecast-events.component.sass']
})
export class ForecastEventsComponent implements OnInit {

  constructor() { }

  @Input()
  events: ForecastEvent[];

  ngOnInit() {
    if (this.events == null) {
      const e1 = new ForecastEvent();
      e1.balance = 1.11;
      e1.transactions = [
        new Transaction('test 1.1'),
        new Transaction('test 1.2')
      ];
      e1.when = new Date();
      const e2 = new ForecastEvent();
      e2.balance = 1.11;
      e2.transactions = [
        new Transaction('test 1.1'),
        new Transaction('test 1.2')
      ];
      e2.when = new Date();
      this.events = [
        e1,
        e2
      ];
    }
  }
}
