import { Observable } from 'rxjs';
import { Profile } from '../classes/profile';
import { Calendar } from '../classes/calendar';
import { Transaction } from '../classes/transaction';
import { ProjectedTransaction } from '../classes/projected-transaction';
export interface CalendarServiceInterface {
  getCalendars(profile: Profile): Observable<Calendar[]>;
  getPlannedExpenses(calendar: Calendar): Observable<Transaction[]>;
  saveProjectedExpenses(calendar: Calendar, projection: ProjectedTransaction[]): Observable<boolean>;
}
