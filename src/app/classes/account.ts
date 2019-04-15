import { Calendar } from './calendar';
import { AccountType } from './account-type';
import { Transaction } from './transaction';
import { ProjectedTransaction } from './projected-transaction';
export class Account {
  id: string;
  name: string;
  notes: string;
  history: Transaction[];
  type: AccountType;
  balance: number;
  plan: Calendar;
  projection: ProjectedTransaction[];
  APR: number;
  toString(): string {
    return this.name;
  }
}
