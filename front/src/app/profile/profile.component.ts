import { Vehicle } from './../domain/models/vehicle';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './../account.service';
import { RouterOutlet } from '@angular/router';
import { Account } from '../domain/models/account';
import { Shop } from '../domain/models/shop';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']

})




export class ProfileComponent implements OnInit {

    account: Account;
    vehicle:Vehicle = new Vehicle();
    shop:Shop = new Shop();

    ngOnInit(): void {

        this.accountService.getById(+localStorage.getItem('uid')).subscribe((account) => {
            this.account = account;
            if(this.account.account_type == 0){
                this.accountService.getVehicle(this.account.iduser).subscribe((car:Vehicle[])=>{
                    if(car.length>0){
                        this.vehicle = car[0];
                    }
                });
            }
            else {
                this.accountService.getShop(this.account.iduser).subscribe((shoop:Shop[])=>{
                    this.shop = shoop[0];
                });
            }
          });



    }

    constructor(public accountService:AccountService) {

        

    }

    prepareRoute(outlet: RouterOutlet) {

        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }

}
