import { TransactionType } from './transaction-type';
import { Account } from './account';

export class Transaction {
  amount: number;
  description: string;
  when: Date = new Date();
  type: TransactionType;
  target: Account;

  constructor(desc: string = null, amount: number = null, date: Date = null) {
    this.description = desc;
    this.amount = amount;
    this.when = date;
  }
}
