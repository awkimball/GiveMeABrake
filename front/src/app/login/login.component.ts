import { Owner } from '../domain/models/owner';
import { Driver } from '../domain/models/driver';

import { Component, OnInit } from '@angular/core';
import { AccountService } from './../account.service';
import { Subscription } from 'rxjs';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  accountname='';
  password = '';

  // subscription: Subscription;

  // driverAccounts:Driver[] = [];
  // ownerAccounts:Owner[];

  constructor(public accountService:AccountService, public router: Router) {
   }

  ngOnInit() {

  }

  checkAccount() {
    for(const dv of this.accountService.defaultDriver) {
      if(this.accountname === dv.username) {
        if(this.password === dv.password) {
          console.log('login');
          this.accountService.setDriver = dv;
          this.accountService.accountType=true;
          this.router.navigate(['\home']);
        } else {
                console.log('Invalid password');
              }
      }
    }
    for(const dv of this.accountService.defaultOwner) {
      if(this.accountname === dv.username) {
        if(this.password === dv.password) {
          console.log('login');
          this.accountService.setOwner=dv;
          this.accountService.accountType=false;
          this.router.navigate(['\home']);
        } else {
                console.log('Invalid password');
              }
      }
    }
    // this.accountService.getDriver().subscribe(account => {this.driverAccounts = account;
    //   for(const dv of this.driverAccounts) {
    //     if(this.accountname === dv.username) {
    //       if(this.password === dv.password) {
    //         console.log('invalid password', dv.username, dv.password, this.accountname, this.password);
    //         this.router.navigate(['\home']);
    //       } else {
    //         console.log('login');
    //         this.router.navigate(['\home']);
    //       }
    //     }
    //   }

    //   console.log('invalid username');
    // });
  }


}
