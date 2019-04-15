import { Observable } from 'rxjs';
import { ForecastEvent } from '../classes/forecast-event';
import { FindTransactionConfig } from '../classes/find-transaction-config';
import { Transaction } from '../classes/transaction';
import { ProjectedTransaction } from '../classes/projected-transaction';
export interface ForecastServiceInterface {
  runForecast(account: Account): Observable<ForecastEvent[]>;
  findRecurringTransactions(account: Account, config?: FindTransactionConfig): Observable<Transaction[]>;
  projectTransactions(recurringTransactions: Transaction[]): Observable<ProjectedTransaction>;
  previewProjection(account: Account, projection: ProjectedTransaction[]): Observable<ForecastEvent[]>;
}