import { NavServiceService } from './../nav-service.service';
import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public accountService:AccountService, public navServiceService:NavServiceService) {
  }

  ngOnInit() {
    this.navServiceService.hide();
  }

  setValue(value:number) {
    this.accountService.account.typeofaccount=value;
  }

}
