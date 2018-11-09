import { Component, OnInit } from '@angular/core';
import { AccountService } from './../account.service';
import { RouterOutlet } from '@angular/router';
import { Account } from '../domain/models/account';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']

})




export class ProfileComponent implements OnInit {

    account: Account;

    ngOnInit(): void {

        this.accountService.getById(+localStorage.getItem('uid')).subscribe((account) => {
            this.account = account;
          });

    }

    constructor(public accountService:AccountService) {

        

    }

    prepareRoute(outlet: RouterOutlet) {

        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }

}
