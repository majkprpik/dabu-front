import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { WalletsService } from 'src/app/services/wallets.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
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
export class WalletComponent implements OnInit {
  allWallets: any[];

  constructor(private walletsService: WalletsService) {
    this.allWallets = [];
    this.walletsService.allWallets.subscribe((allWallets) => {
      this.allWallets = allWallets;
    })
  }

  ngOnInit(): void {
  }

}
