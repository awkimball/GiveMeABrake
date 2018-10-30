import { Owner } from './../domain/owner';
import { Vehicle } from './../domain/vehicle';
import { Driver } from './../domain/driver';

import { Component, OnInit, ElementRef,ViewChild} from '@angular/core';
import { NavServiceService } from './../nav-service.service';
import { AccountService } from './../account.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('openModal') openModal:ElementRef;
  @ViewChild('openModal2') openModal2:ElementRef;

  newDriver:Driver = new Driver();
  newOwner:Owner = new Owner();
  newCar:Vehicle = new Vehicle();

  newReview: string;
  newDeal: string;

  addACar:boolean;

  showPage: boolean;
  isADriver:boolean;

  constructor(public accountService:AccountService, public navServiceService:NavServiceService, public router: Router) {
    this.showPage = false;
    this.isADriver=false;
  }

  ngOnInit() {
    this.openModal.nativeElement.click();
  }


  addCarCheck() {
    if(this.addACar) {
      this.saveAccount();
      this.router.navigate(['']);
    } else {
      this.openModal2.nativeElement.click();
    }
  }

  addOwnerCheck() {
    if(this.newDeal) {
    this.newOwner.deals = [];
    this.newOwner.deals.push(this.newDeal);
    }
    if(this.newReview) {
      this.newOwner.review = [];
      this.newOwner.review.push(this.newDeal);
    }

    this.accountService.defaultOwner.push(this.newOwner);
    this.newOwner = new Owner;
    this.newDeal = '';
    this.newReview = '';
  }

  saveAccount() {
    if(this.addACar) {
      this.newDriver.vehicles = [];
      this.newDriver.vehicles.push(this.newCar);}
  //  this.savedDriver.push(this.newDriver);


   this.accountService.defaultDriver.push(this.newDriver);
   this.newDriver = new Driver;
   this.newCar = new Vehicle;
  }

}
