import { Owner } from './../domain/owner';
import { NavServiceService } from './../nav-service.service';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './../account.service';

@Component({
  selector: 'app-checkdeal',
  templateUrl: './checkdeal.component.html',
  styleUrls: ['./checkdeal.component.css']
})
export class CheckdealComponent implements OnInit {

  otherdeal: Owner[] = [];

  constructor(public accountService:AccountService, public navServiceService:NavServiceService) {
    for(const owner of this.accountService.defaultOwner) {
      if(owner.username !== this.accountService.setOwner.username) {
        this.otherdeal.push(owner);
      }
    }
  }

  ngOnInit() {
    this.navServiceService.show();
  }

}
