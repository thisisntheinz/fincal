import { Observable, BehaviorSubject } from 'rxjs';
import { FilterConfig } from './filter-config';
import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { ForecastEvent } from './forecast-event';

export class ForecastEventDataSource extends DataSource<ForecastEvent> {
  constructor(private _data: ForecastEvent[]) {
    super();
    this.load(_data);
  }
  _ForecastEvents = new BehaviorSubject<ForecastEvent[]>([]);
  public load(ForecastEvents: ForecastEvent[]) {
    this._data = ForecastEvents;
    this._ForecastEvents.next(ForecastEvents);
  }
  public filter(filterConfig: FilterConfig) {
    this._ForecastEvents.next(this._data.filter(d => filterConfig.IsDisplayed(d)));
  }
  connect(collectionViewer: CollectionViewer): Observable<ForecastEvent[] | ReadonlyArray<ForecastEvent>> {
    return this._ForecastEvents;
  }
  disconnect(collectionViewer: CollectionViewer): void {
    // not sure!
  }
}
