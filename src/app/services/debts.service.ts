import { Debt } from './../models/debt';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DebtsService {
  allDebts = new BehaviorSubject<Debt[]>([
    {
      who: 'KUM',
      howMuch: 100,
    },
    {
      who: 'KUM1',
      howMuch: 100,
    },
    {
      who: 'KUM2',
      howMuch: 100,
    },
    {
      who: 'KUM3',
      howMuch: 100,
    },
  ]);
  constructor() {}
}
