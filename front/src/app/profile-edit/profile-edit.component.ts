import { Component, OnInit } from '@angular/core';
import { AccountService } from './../account.service';
import { Account } from '../domain/models/account';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

    account: Account;

    constructor(public accountService:AccountService, public router:Router) { 

        
    }

    ngOnInit() {

        this.accountService.getById(+localStorage.getItem('uid')).subscribe((account) => {

            this.account = account;

        });
    }

    save() {

        this.router.navigate(['profile']);
    }

    }
