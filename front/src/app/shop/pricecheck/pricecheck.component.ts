import { Zipcode } from './../../domain/models/zipcode';
import { Account } from './../../domain/models/account';
import { MapcalculatorService } from './../../mapcalculator.service';
import { Router } from '@angular/router';
import { AccountService } from './../../account.service';
import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/domain/models/shop';

@Component({
  selector: 'app-pricecheck',
  templateUrl: './pricecheck.component.html',
  styleUrls: ['./pricecheck.component.css']
})
export class PricecheckComponent implements OnInit {

  shop:Shop;

  current:Account;

  othershop:Shop[] = [];
  distance: number[] = [];

  constructor(public accountService:AccountService, public router:Router, public mapcalculatorService:MapcalculatorService) {

    this.accountService.getShop(+localStorage.getItem('uid')).subscribe((shop) => {

      this.shop=shop[0];
    
      this.accountService.getAllusers().subscribe((users:Account[]) => {
        for (var eachUser of users) {
          if(eachUser.iduser != this.shop.iduser && eachUser.account_type == 1) {
            this.current = eachUser;
            this.accountService.getZips(eachUser.zipcode).subscribe((zip1:Zipcode[]) => {
              this.accountService.getZips(+localStorage.getItem('zip')).subscribe((zip2:Zipcode[]) => {
                var dis = this.mapcalculatorService.calculateDistance(zip1[0],zip2[0]);
                console.log(zip1[0],zip2[0]);
                if(dis <1) {
                  this.accountService.getShop(this.current.iduser).subscribe((nearShop:Shop[]) =>{
                    console.log(nearShop);
                    this.othershop.push(nearShop[0]);
                    this.distance.push(dis);
                  });
                }
              });
            });
          }
        }
      });
    });

  }

  ngOnInit() {
  }

}
