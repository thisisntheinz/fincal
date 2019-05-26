import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FincalRoutingModule } from './fincal-routing.module';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { ForecastEventComponent } from './components/forecast-event/forecast-event.component';
import { ForecastEventsComponent } from './components/forecast-events/forecast-events.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    TransactionsComponent,
    ForecastEventComponent,
    ForecastEventsComponent
  ],
  imports: [
    BrowserModule,
    FincalRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
