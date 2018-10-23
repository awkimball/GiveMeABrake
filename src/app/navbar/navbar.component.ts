import { Component, OnInit } from '@angular/core';
import { NavServiceService } from './../nav-service.service';
import { AccountService } from './../account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(public accountService:AccountService, public navServiceService:NavServiceService) {
  }

  ngOnInit() {

  }
}
