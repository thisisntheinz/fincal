import { TransactionType } from './transaction-type';
import { Account } from './account';

export class Transaction {
  amount: number;
  description: string;
  when: Date;
  type: TransactionType;
  target: Account;

  constructor(desc: string = null) {
    this.description = desc;
  }
}
