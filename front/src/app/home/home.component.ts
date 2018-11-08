import { Component, OnInit } from '@angular/core';
import { AccountService } from './../account.service';
import { Account } from '../domain/models/account';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  account: Account;

  constructor(public accountService:AccountService) {
      
  }

  ngOnInit() {

    if (localStorage.getItem('loggedIn') == 'true') {

        this.accountService.getById(+localStorage.getItem('uid')).subscribe((account) => {

            this.account = account;

        });
    }

  }

}
