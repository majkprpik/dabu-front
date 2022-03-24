import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { SalesComponent } from './components/sales/sales.component';
import { DebtsComponent } from './components/debts/debts.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { AllSalesComponent } from './components/all-sales/all-sales.component';

import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ProductsComponent } from './components/products/products.component';
import { ReportsComponent } from './components/reports/reports.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewUserComponent,
    SalesComponent,
    DebtsComponent,
    WalletComponent,
    AllSalesComponent,
    ProductsComponent,
    ReportsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,    
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatCheckboxModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
