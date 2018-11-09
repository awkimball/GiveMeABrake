import { Component, OnInit } from '@angular/core';
import { AccountService } from './../account.service';
import { longStackSupport } from 'q';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    constructor(public accountService:AccountService) {
    }

    ngOnInit() {


            

    }
    
    logout() {

        localStorage.setItem('loggedIn', 'false');
        localStorage.setItem('uid', 'null');

    }

}
