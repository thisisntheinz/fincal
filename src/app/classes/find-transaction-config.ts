import { Frequency } from './frequency';
export class FindTransactionConfig {
  start: Date;
  end: Date;
  minimum: number;
  maximum: number;
  frequency: Frequency;
}
