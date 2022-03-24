import { trigger, transition, style, animate } from '@angular/animations';
import { Debt } from 'src/app/models/debt';
import { DebtsService } from './../../services/debts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.scss'],
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
export class DebtsComponent implements OnInit {
  allDebts: Debt[];
  constructor(private debtsService: DebtsService) {
    this.allDebts = [];
    this.debtsService.allDebts.subscribe((allDebts) => {
      this.allDebts = allDebts;
    })
  }


  ngOnInit(): void {
  }

}
