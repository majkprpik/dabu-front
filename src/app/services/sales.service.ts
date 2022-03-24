import { DebtsService } from './debts.service';
import { Sale } from './../models/sale';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WalletsService } from './wallets.service';
import { ProductsService } from './products.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  allSales: BehaviorSubject<any> = new BehaviorSubject([]);

  newSale(sale: Sale) {
    this.allSales.next([...this.allSales.value, sale]);
    let sum = 0;
    sale.products.forEach((p) => {
      sum +=
        this.productService.products.value.findIndex((pro) => pro.id == p) != -1
          ? this.productService.products.value[
              this.productService.products.value.findIndex((pro) => pro.id == p)
            ].price
          : 0;
    });
    if (sale.teka) {
      this.debtsService.allDebts.next([
        ...this.debtsService.allDebts.value,
        {
          who: sale.kum,
          howMuch: sum,
        },
      ]);
    } else
      this.walletsService.allWallets.next([
        {
          valuta: 'HRK',
          value: this.walletsService.allWallets.value[0].value + sum,
        },
      ]);
  }

  constructor(
    private walletsService: WalletsService,
    private productService: ProductsService,
    private debtsService: DebtsService,
    private http: HttpClient,
  ) {

    this.http.get<any>("/asdf/api/sale").subscribe((data: any) => console.log(data));;
  }
}
