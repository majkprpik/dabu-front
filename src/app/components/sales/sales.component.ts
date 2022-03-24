import { DebtsService } from './../../services/debts.service';
import { Product } from './../../models/product';
import { NonNullAssert } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Sale } from 'src/app/models/sale';
import { ProductsService } from 'src/app/services/products.service';
import { SalesService } from 'src/app/services/sales.service';
import { WalletsService } from 'src/app/services/wallets.service';
import { Debt } from 'src/app/models/debt';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
  // animations: [
  //   trigger(
  //     'inOutAnimation', 
  //     [
  //       transition(
  //         ':enter', 
  //         [
  //           style({ left: '-500px', opacity: 0.7 }),
  //           animate('1s ease-out',
  //                   style({ left: '0', opacity: 1 }))
  //         ]
  //       ),
  //       transition(
  //         ':leave', 
  //         [
  //           style({ left: '0', opacity: 1 }),
  //           animate('5s ease-out',
  //                   style({ left: '1000px', opacity: 1 }))
  //         ]
  //       )
  //     ]
  //   )
  // ]
})
export class SalesComponent implements OnInit {
  products: Product[] = [];

  sale: Sale;
  allSales: Sale[];
  allWallets: any[];
  allDebts: Debt[];
  
  temp = true;

  constructor(private saleService: SalesService, private walletsService: WalletsService, private productsService: ProductsService, private debtsService: DebtsService) {
    this.allSales = [];
    this.allWallets = [];
    this.allDebts = [];
    this.sale = {
      products: [],
      teka: false,
      kum: "KUM",
      buda: false,
    };
    this.saleService.allSales.subscribe((allSales) => {
      this.allSales = allSales;
    })
    this.walletsService.allWallets.subscribe((allWallets) => {
      this.allWallets = allWallets;
    })
    this.productsService.products.subscribe(products => {
      this.products = products;
    })
    this.debtsService.allDebts.subscribe((allDebts) => {
      this.allDebts = allDebts;
    })
  }

  addProduct(productId: number) {
    this.sale.products.push(productId);
  }

  removeProduct(productId: number) {
    let ind = this.sale.products.findIndex(e => {
      return e == productId
    })
    if(ind != -1) this.sale.products.splice(ind, 1);
  }

  getProductNumber(sale: Sale, id: number) {
    return sale.products.filter(e => { return e == id }).length;
  }

  getProductNumberInCart(id: number) {
    return this.sale.products?.filter((e: number) => { return e == id }).length
  }
  
  makeSale() {
    if(this.sale.products.length == 0) return
    this.saleService.newSale(this.sale);
    this.resetSale();
  }

  setTeka(checked: boolean) {
    this.sale.teka = checked;
  }

  resetSale() {
    this.sale = {
      products: [],
      teka: false,
      buda: false,
      kum: "KUM",
    };
  }

  ngOnInit(): void {}

}
