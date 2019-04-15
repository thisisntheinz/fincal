import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../../classes/transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.sass']
})
export class TransactionsComponent implements OnInit {

  constructor() { }

  @Input()
  transactions: Transaction[] | null;

  ngOnInit() {
    if (this.transactions == null) {
      this.transactions = [
        new Transaction('test 1'),
        new Transaction('test 2')
      ]
    }
  }
}
