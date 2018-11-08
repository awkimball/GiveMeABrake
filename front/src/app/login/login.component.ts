import { Owner } from '../domain/models/owner';
import { Driver } from '../domain/models/driver';

import { Component, OnInit } from '@angular/core';
import { AccountService } from './../account.service';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    email: string;
    password: string;


    constructor(private accountService:AccountService, public router: Router) {
        this.email = '';
        this.password = ';'
    }

    ngOnInit() {

    }

    checkAccount() {

        if (this.email != '' && this.password != '') {

            this.accountService.login(this.email,this.password).subscribe((accounts) => {

                if (accounts.length > 0) {

                    alert(JSON.stringify(accounts));

                } else {

                    alert('failure');
                }
        
            });
        }

    }


}
