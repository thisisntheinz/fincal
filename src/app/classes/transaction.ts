import { TransactionType } from './transaction-type';
import { Account } from './account';

export class Transaction {
  amount: number;
  description: string;
  when: string;
  type: TransactionType;
  target: Account;
}
