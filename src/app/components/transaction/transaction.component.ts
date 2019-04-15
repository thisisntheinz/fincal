import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from 'src/app/classes/transaction';
import { TransactionType } from '../../classes/transaction-type';
import { Account } from 'src/app/classes/account';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.sass']
})
export class TransactionComponent implements OnInit {

  constructor() {  }

  @Input()
  transaction: Transaction | null;

  ngOnInit() {
    if (this.transaction == null) {
      this.transaction = new Transaction();
      this.transaction.amount = 1.23;
      this.transaction.description = 'test';
      this.transaction.when = new Date('1/23/2019');
      this.transaction.type = TransactionType.credit;
      this.transaction.target = new Account();
      this.transaction.target.name = 'test account';
    }
  }
}
