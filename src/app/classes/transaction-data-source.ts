import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { Transaction } from './transaction';
import { Observable, BehaviorSubject } from 'rxjs';
import { FilterConfig } from './filter-config';

export class TransactionDataSource extends DataSource<Transaction> {
  constructor(private _data: Transaction[]) {
    super();
    this.load(_data);
  }
  _transactions = new BehaviorSubject<Transaction[]>([]);
  public load(transactions: Transaction[]) {
    this._data = transactions;
    this._transactions.next(transactions);
  }
  public filter(filterConfig: FilterConfig) {
    this._transactions.next(this._data.filter(d => filterConfig.IsDisplayed(d)));
  }
  connect(collectionViewer: CollectionViewer): Observable<Transaction[] | ReadonlyArray<Transaction>> {
    return this._transactions;
  }
  disconnect(collectionViewer: CollectionViewer): void {
    // not sure!
  }
}
