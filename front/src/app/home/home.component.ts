import { Deals } from './../domain/models/deals';
import { Zipcode } from './../domain/models/zipcode';
import { Review } from './../domain/models/review';
import { Shop } from './../domain/models/shop';
import { Vehicle } from './../domain/models/vehicle';
import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { AccountService } from './../account.service';
import { Account } from '../domain/models/account';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('openModal') openModal:ElementRef;

  account: Account = new Account();
  isLogin: boolean;

  newZip: number;
  changeZip: boolean;


  
  cars: Vehicle;
  shop: Shop;

  constructor(public accountService:AccountService) {
    this.changeZip = false;

    if (localStorage.getItem('loggedIn') == 'true') {
        this.isLogin = true;

        this.accountService.getById(+localStorage.getItem('uid')).subscribe((account) => {

            this.account = account;

            if(this.account.account_type == 0) {
              this.accountService.getVehicle(this.account.iduser).subscribe((vehicle:Vehicle[]) => {
                if (vehicle.length === 0) {
                  this.openModal.nativeElement.click();
                } else {
                  this.cars = vehicle[0];
                }
              }
              );
            }
            if(this.account.account_type == 1) {
              this.accountService.getShop(this.account.iduser).subscribe((shops:Shop[]) => {
                if (shops.length === 0) {
                  this.openModal.nativeElement.click();
                } else {
                  this.shop = shops[0];
                }
              }
              );
            }

        });
    }

    else {
      this.isLogin = false;
    }
      
  }

  ngOnInit() {
    

  }

  saveZip() {
    this.account.zipcode = this.newZip;
    this.accountService.updateUser(this.account.iduser,this.account).subscribe();
    this.changeZip = false;
  }

}
