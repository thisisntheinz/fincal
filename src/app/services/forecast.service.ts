import { Injectable } from '@angular/core';
import { ForecastServiceInterface } from '../interfaces/forecast-service.interface';
import { Observable, of } from 'rxjs';
import { ForecastEvent } from '../classes/forecast-event';
import { FindTransactionConfig } from '../classes/find-transaction-config';
import { Transaction } from '../classes/transaction';
import { ProjectedTransaction } from '../classes/projected-transaction';

@Injectable({
  providedIn: 'root'
})
export class ForecastService implements ForecastServiceInterface {
  runForecast(account: Account): Observable<ForecastEvent[]> {
    /*
    Start with account balance
    Sort transaction history by date
    Group transaction by date
    Create forecast event for date, balance, and transactions
    */
    return of([
      new ForecastEvent(),
      new ForecastEvent()
    ]);
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
