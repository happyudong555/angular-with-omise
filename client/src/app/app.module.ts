import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddCardComponent } from './Components/add-card/add-card.component';
import { routing } from "./app.routing";
import { AddBankComponent } from './Components/add-bank/add-bank.component';
import { ListRecipientsComponent } from './Components/list-recipients/list-recipients.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCardComponent,
    AddBankComponent,
    ListRecipientsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
