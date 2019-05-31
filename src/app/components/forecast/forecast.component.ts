import { Component, OnInit, Input } from '@angular/core';
import { ForecastEvent } from '../../classes/forecast-event';
import { Forecast } from '../../classes/forecast';
import { Transaction } from '../../classes/transaction';
import { ForecastService } from '../../services/forecast.service';
import { Account } from '../../classes/account';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.sass']
})
export class ForecastComponent implements OnInit {

  constructor(
    private _forecast: ForecastService
  ) { }

  @Input()
  forecast: Forecast;

  show: ForecastEvent | null;

  ngOnInit() {
    if (!this.forecast) {
      this.forecast = new Forecast();
      this.forecast.account.history.push(new Transaction('test 1', 1.11, new Date('6/11/2019')));
      this.forecast.account.history.push(new Transaction('test 2', 2.11, new Date('6/13/2019')));
      this.forecast.account.history.push(new Transaction('test 3', -3.11, new Date('6/13/2019')));
      this.forecast.account.history.push(new Transaction('test 4', 1.41, new Date('6/14/2019')));
      this.forecast.account.history.push(new Transaction('test 5', 1.51, new Date('6/14/2019')));
      this.forecast.account.history.push(new Transaction('test 6', 1.16, new Date('6/15/2019')));
    }
  }

  run() {
    this._forecast.runForecast(this.forecast.account, this.forecast.start, this.forecast.end).subscribe(results => {
      this.forecast.events = results;
    });
  }
  sample() {
    this.forecast = new Forecast();
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
      new Transaction('test 2.1')
    ];
    e2.when = new Date();
    this.forecast.events = [
      e1,
      e2
    ];
  }
}
