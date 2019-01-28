import { Observable } from 'rxjs';
import { Profile } from '../classes/profile';
import { Calendar } from '../classes/calendar';
import { Transaction } from '../classes/transaction';
import { ProjectedTransaction } from '../classes/projected-transaction';
export interface CalendarServiceInterface {
  getCalendars(profile: Profile): Observable<Calendar[]>;
  getTransactions(calendar: Calendar): Observable<Transaction[]>;
  saveProjectedTransactions(calendar: Calendar, projection: ProjectedTransaction[]): Observable<boolean>;
}
