import { Injectable } from '@angular/core';
import { ForecastServiceInterface } from '../interfaces/forecast-service.interface';
import { Observable, of } from 'rxjs';
import { ForecastEvent } from '../classes/forecast-event';
import { FindTransactionConfig } from '../classes/find-transaction-config';
import { Transaction } from '../classes/transaction';
import { ProjectedTransaction } from '../classes/projected-transaction';
import { Account } from '../classes/account';

@Injectable({
  providedIn: 'root'
})
export class ForecastService implements ForecastServiceInterface {
  runForecast(account: Account, start: Date = null, end: Date = null): Observable<ForecastEvent[]> {
    /*
    Start with account balance
    Sort transaction history by date
    Group transaction by date
    Create forecast event for date, balance, and transactions
    */
    const h = account.history.filter(t => {
      return (start === null || isNaN(start.getTime()) || (t.when >= start))
        && (end === null || isNaN(end.getTime()) || (t.when <= end));
    });
    h.sort((a, b) => {
      return (a > b) ? 1 : (a < b) ? -1 : 0;
    });
    const r: ForecastEvent[] = [];
    let c = new ForecastEvent();
    h.forEach(t => {
      if (t.when.getTime() !== c.when.getTime()) {
        c = new ForecastEvent(c.balance);
        c.when = t.when;
        r.push(c);
      }
      c.transactions.push(t);
      c.balance += t.amount;
    });
    return of(r);
  }
  findRecurringTransactions(account: Account, config?: FindTransactionConfig): Observable<Transaction[]> {
    return of([
      new Transaction(),
      new Transaction()
    ]);
  }
  projectTransactions(recurringTransactions: Transaction[]): Observable<ProjectedTransaction> {
    return of(new ProjectedTransaction());
  }
  previewProjection(account: Account, projection: ProjectedTransaction[]): Observable<ForecastEvent[]> {
    return of([
      new ForecastEvent(),
      new ForecastEvent()
    ]);
  }

  constructor() { }
}
