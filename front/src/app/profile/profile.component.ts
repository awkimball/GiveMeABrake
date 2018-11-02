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

        

    }

    constructor(public accountService:AccountService) {

        this.accountService.getById(1).subscribe((account) => {
            this.account = account;
          });

    }

    prepareRoute(outlet: RouterOutlet) {

        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }

}
