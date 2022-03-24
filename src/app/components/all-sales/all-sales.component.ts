import { Sale } from 'src/app/models/sale';
import { Component, OnInit } from '@angular/core';
import { SalesService } from 'src/app/services/sales.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-all-sales',
  templateUrl: './all-sales.component.html',
  styleUrls: ['./all-sales.component.scss'],
  // animations: [
  //   trigger(
  //     'inOutAnimation', 
  //     [
  //       transition(
  //         ':enter', 
  //         [
  //           style({ height: 0, opacity: 0 }),
  //           animate('1s ease-out', 
  //                   style({ height: 300, opacity: 1 }))
  //         ]
  //       ),
  //       transition(
  //         ':leave', 
  //         [
  //           style({ height: 300, opacity: 1 }),
  //           animate('1s ease-in', 
  //                   style({ height: 0, opacity: 0 }))
  //         ]
  //       )
  //     ]
  //   )
  // ]
})
export class AllSalesComponent implements OnInit {
  allSales: Sale[];
  makeSales() {}

  constructor(private saleService: SalesService) {
    this.allSales = [];
   
    this.saleService.allSales.subscribe((allSales) => {
      this.allSales = allSales;
    })
  }

  ngOnInit(): void {
  }

  getProductNumber(sale: Sale, id: number) {
    return sale.products.filter(e => { return e == id }).length;
  }

}
