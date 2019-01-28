import { Observable } from 'rxjs';
import { Profile } from '../classes/profile';
import { Account } from '../classes/account';
import { Transaction } from '../classes/transaction';
export interface AccountServiceInterface {
  getAccounts(profile: Profile): Observable<Account[]>;
  getAccountHistory(account: Account): Observable<Transaction[]>;
}
