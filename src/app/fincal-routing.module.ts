import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { ForecastEventComponent } from './components/forecast-event/forecast-event.component';
import { ForecastEventsComponent } from './components/forecast-events/forecast-events.component';

const fincalRoutes: Routes = [
  { path: 'transaction', component: TransactionComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'forecast-event', component: ForecastEventComponent },
  { path: 'forecast-events', component: ForecastEventsComponent },
  /*
  { path: 'account' },
  { path: 'calendar' },
  { path: 'filter-config' },
  { path: 'find-transaction-config' },
  { path: 'forecast' },
  { path: 'profile' },
  { path: 'projected-transaction' }
  */
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      fincalRoutes,
      { enableTracing: true }
    )
  ],
  exports: [RouterModule]
})
export class FincalRoutingModule { }
