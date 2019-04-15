import { Injectable } from '@angular/core';
import { CalendarServiceInterface } from '../interfaces/calendar-service.interface';
import { Profile } from '../classes/profile';
import { Observable, of } from 'rxjs';
import { Calendar } from '../classes/calendar';
import { Transaction } from '../classes/transaction';
import { ProjectedTransaction } from '../classes/projected-transaction';

@Injectable({
  providedIn: 'root'
})
export class CalService implements CalendarServiceInterface {
  getCalendars(profile: Profile): Observable<Calendar[]> {
    return of([]);
  }
  getPlannedExpenses(calendar: Calendar): Observable<Transaction[]> {
    return of([]);
  }
  saveProjectedExpenses(calendar: Calendar, projection: ProjectedTransaction[]): Observable<boolean> {
    return of(true);
  }

  constructor(
  ) { }
}
