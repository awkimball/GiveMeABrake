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
    typeofaccount: 1
  };

  changeType(type:number) {
    this.account.typeofaccount=type;
  }

}
