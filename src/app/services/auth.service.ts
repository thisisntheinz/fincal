import { Injectable } from '@angular/core';
import { AuthServiceInterface } from '../interfaces/auth-service.interface';
import { Observable, of } from 'rxjs';
import { Profile } from '../classes/profile';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements AuthServiceInterface {
  signIn(): Observable<Profile> {
    return of(new Profile());
  }
  signOut(): void {
    return;
  }

  constructor() { }
}
