import { Shop } from '../domain/models/shop';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './../account.service';

@Component({
  selector: 'app-checkdeal',
  templateUrl: './checkdeal.component.html',
  styleUrls: ['./checkdeal.component.css']
})
export class CheckdealComponent implements OnInit {

  otherdeal: Shop[] = [];

  constructor(public accountService:AccountService) {
    // for(const owner of this.accountService.defaultOwner) {
    //   if(owner.username !== this.accountService.setOwner.username) {
    //     this.otherdeal.push(owner);
    //   }
    // }
  }

  ngOnInit() {
      
  }

}
