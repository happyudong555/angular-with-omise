import { ListRecipientsComponent } from './Components/list-recipients/list-recipients.component';
import { AddBankComponent } from './Components/add-bank/add-bank.component';
import { AddCardComponent } from './Components/add-card/add-card.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'' , component: AddCardComponent},
  {path:'addbank' , component: AddBankComponent},
  {path:'listrecipient', component: ListRecipientsComponent}
]

export const routing = RouterModule.forRoot(routes);
