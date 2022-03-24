import { Wallet } from './../models/wallet';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletsService {
  allWallets = new BehaviorSubject<Wallet[]>([
    {
      valuta: 'HRK',
      value: 100
    },
    // {
    //   valuta: 'EUR',
    //   value: 1023401
    // },
    // {
    //   valuta: 'DIN',
    //   value: 102340
    // },
    // {
    //   valuta: 'KM',
    //   value: 234
    // },
    // {
    //   valuta: 'FOR',
    //   value: 102340
    // }
  ]);

  constructor() { }
}
