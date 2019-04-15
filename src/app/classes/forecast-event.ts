import { Transaction } from './transaction';
export class ForecastEvent {
  transactions: Transaction[];
  balance: number;
  when: Date;
}
