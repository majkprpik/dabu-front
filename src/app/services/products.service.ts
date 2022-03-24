import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = new BehaviorSubject<Product[]>([
    {
      id: 1,
      name: 'PIVO OSJECKO 0,5L',
      price: 7,
    },
    {
      id: 2,
      name: 'PIVO OSJECKO 1L',
      price: 12,
    },
    {
      id: 3,
      name: 'PIVO OSJECKO 2L',
      price: 15,
    },
    {
      id: 4,
      name: 'PIVO Karlovacko 0,5L',
      price: 7,
    },
    {
      id: 5,
      name: 'PIVO Karlovacko 1,854L',
      price: 14,
    },
    {
      id: 5,
      name: 'PIVO Karlovacko 1,854L',
      price: 14,
    },
    {
      id: 5,
      name: 'PIVO Karlovacko 1,854L',
      price: 14,
    },
    {
      id: 5,
      name: 'PIVO Karlovacko 1,854L',
      price: 14,
    },
    {
      id: 5,
      name: 'PIVO Karlovacko 1,854L',
      price: 14,
    },
  ]);

  constructor() { }
}
