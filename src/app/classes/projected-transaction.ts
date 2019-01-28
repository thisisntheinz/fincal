import { RRule } from 'rfc5545-rrule';

export class ProjectedTransaction {
  amount: number;
  description: string;
  recurrence: RRule;
}
