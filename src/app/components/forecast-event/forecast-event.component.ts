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
  event: ForecastEvent | null;

  ngOnInit() {
    if (this.event == null) {
      this.event = new ForecastEvent();
      this.event.transactions = [
        new Transaction('test 1'),
        new Transaction('test 2')
      ];
      this.event.balance = 1.11;
      this.event.when = new Date();
    }
  }
}
