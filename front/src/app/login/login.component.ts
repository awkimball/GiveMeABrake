
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
        this.password = '';
    }

    ngOnInit() {

    }

    checkAccount() {

        if (this.email != '' && this.password != '') {

            this.accountService.login(this.email,this.password).subscribe((accounts) => {

                if (accounts.length > 0) {

                    alert('Authenticated Successfully!');
                    localStorage.setItem('loggedIn', 'true');
                    localStorage.setItem('uid', `${accounts[0].iduser}`);
                    this.router.navigate(['home']);

                } else {

                    alert('Email or password not correct.');
                    this.password = '';
                }
        
            });
        } else {

            alert('fields empty!');
        }

    }


}
