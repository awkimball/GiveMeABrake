import { Account } from './../domain/models/account';
import { Shop } from '../domain/models/shop';
import { Vehicle } from '../domain/models/vehicle';

import { Component, OnInit, ElementRef,ViewChild} from '@angular/core';
import { AccountService } from './../account.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // @ViewChild('openModal') openModal:ElementRef;
  // @ViewChild('openModal2') openModal2:ElementRef;

  newAccount:Account = new Account();
  newVehicle:Vehicle =new Vehicle();
  newOwner:Shop = new Shop();

  addACar:boolean;


  constructor(public accountService:AccountService, public router: Router) {
    this.newAccount.account_type = -1;
  }

  ngOnInit() {
//    this.openModal.nativeElement.click();
  }


  changeType(type:number) {
    this.newAccount.account_type = type;
  }
  // addCarCheck() {
  //   if(this.addACar) {
  //     this.saveAccount();
  //     this.router.navigate(['']);
  //   } else {
  //     this.openModal2.nativeElement.click();
  //   }
  // }

  addOwnerCheck() {
    // if(this.newDeal) {
    // this.newOwner.deals = [];
    // this.newOwner.deals.push(this.newDeal);
    // }
    // if(this.newReview) {
    //   this.newOwner.review = [];
    //   this.newOwner.review.push(this.newDeal);
    // }

    // this.accountService.defaultOwner.push(this.newOwner);
    // this.newOwner = new Owner;
    // this.newDeal = '';
    // this.newReview = '';
  }

  saveAccount() {
    this.accountService.getAllusers().subscribe((allusers:Account[]) => {

      this.accountService.register(this.newAccount).subscribe(
        
      );

      this.router.navigate(['login']);
    });
  }

}
