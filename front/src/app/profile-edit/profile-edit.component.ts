import { Shop } from './../domain/models/shop';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './../account.service';
import { Account } from '../domain/models/account';
import { Router } from '@angular/router';
import { Vehicle } from '../domain/models/vehicle';


@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

    account: Account;
    vehicle:Vehicle = new Vehicle();
    hasAcar:boolean = false;

    shop:Shop = new Shop();
    hasAshop:boolean = false;


    constructor(public accountService:AccountService, public router:Router) { 
        this.accountService.getById(+localStorage.getItem('uid')).subscribe((account) => {
            this.account = account;
            if(this.account.account_type == 0){
                this.accountService.getVehicle(this.account.iduser).subscribe((car:Vehicle[])=>{
                    if(car.length>0){
                        this.vehicle = car[0];
                        this.hasAcar=true;  
                    }


                });
            }
            else {
                this.accountService.getShop(this.account.iduser).subscribe((shoop:Shop[])=>{
                    if(shoop.length>0){
                    this.shop = shoop[0];
                    this.hasAshop = true;
                    }

                });
            }
          });

        
    }

    ngOnInit(): void {




    }


    save() {
        if(this.account.account_type == 0){
            if(!this.hasAcar){
                this.vehicle.iduser = this.account.iduser;
                this.vehicle.vin = 1;
                this.accountService.addVehicle(this.vehicle).subscribe();
            }
            else{
            this.accountService.updateVehicle(this.vehicle.iduser,this.vehicle.vin,this.vehicle).subscribe();
            }
        }

        else{
            if(!this.hasAshop){
                this.shop.iduser = this.account.iduser;
                this.accountService.addShop(this.shop).subscribe();
            }
            else{
                this.accountService.updateShop(this.shop.iduser,this.shop).subscribe();
            }
        }

        this.accountService.updateUser(this.account.iduser,this.account).subscribe();
        this.router.navigate(['profile']);
    }

}