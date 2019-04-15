import { Profile } from '../classes/profile';
import { Observable } from 'rxjs';
export interface AuthServiceInterface {
  signIn(): Observable<Profile>;
  signOut(): void;
}
