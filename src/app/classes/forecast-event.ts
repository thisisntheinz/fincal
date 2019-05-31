import { Transaction } from './transaction';
export class ForecastEvent {
  transactions: Transaction[] = [];
  balance: number;
  when: Date = new Date();

  constructor(balance: number = 0.0) {
    this.balance = balance;
  }

  get summary(): string {
    if (!this.transactions) { return ''; }
    if (this.transactions.length === 0) { return ''; }
    if (this.transactions.length === 1) { return this.transactions[0].description; }
    return `${this.transactions.length} transactions...`;
  }
}
