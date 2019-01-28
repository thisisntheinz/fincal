import { Transaction } from './transaction';
export class ForecastEvent {
  transactions: Transaction[];
  balance: string;
  when: Date;
}
