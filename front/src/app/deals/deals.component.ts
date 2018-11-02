import { Owner } from '../domain/models/owner';
import { Component, OnInit, ElementRef,ViewChild } from '@angular/core';
import { AccountService } from './../account.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {
  @ViewChild('goback') goback:ElementRef;

  newDeal = '';

  constructor(public accountService:AccountService) {
  }

  ngOnInit() {
  }

//   saveDeal() {
//     this.accountService.setOwner.deals.push(this.newDeal);

//     this.newDeal = '';
//     this.goback.nativeElement.click();
//   }

}
