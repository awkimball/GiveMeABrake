import { NavServiceService } from './../nav-service.service';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './../account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public accountService:AccountService, public navServiceService:NavServiceService) {
  }

  ngOnInit() {
    this.navServiceService.show();
  }

}
