import { DebtsComponent } from './components/debts/debts.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { AllSalesComponent } from './components/all-sales/all-sales.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesComponent } from './components/sales/sales.component';

const routes: Routes = [  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    children: [
      {
        path: 'sales',
        component: SalesComponent,
         data: { state: 'sales' }  
      },
      {
        path: 'allsales',
        component: AllSalesComponent,
         data: { state: 'allsales' } 
      },
      {
        path: 'wallet',
        component: WalletComponent,
         data: { state: 'wallet' } 
      },
      {
        path: 'debts',
        component: DebtsComponent,
         data: { state: 'debts' } 
      },
      {
        path: 'products',
        component: DebtsComponent,
         data: { state: 'debts' } 
      },
    ],
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
