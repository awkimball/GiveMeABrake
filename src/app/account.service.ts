import { Injectable } from '@angular/core';
import { Account } from './domain/models/account';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  account: Account = {

    name: 'Addison Kimball',
    email: 'addison@akimball.com',
    password: 'password',
    isCompany: false,
    myCar: {

        make: 'Honda',
        model: 'Accord',
        year: 2006,
        submodel: '2.4L v6',
        color: 'Black'

    }

  };

  changeType(type:boolean) {

    this.account.isCompany=!this.account.isCompany;

  }

}
