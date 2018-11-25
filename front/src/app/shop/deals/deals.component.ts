
import { Component, OnInit, ElementRef,ViewChild } from '@angular/core';
import { AccountService } from './../../account.service';
import { Deals } from 'src/app/domain/models/deals';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {
  @ViewChild('goback') goback:ElementRef;

  newDeal:Deals;

  myAllDeal: Deals[];

  constructor(public accountService:AccountService) {
  }

  ngOnInit() {
  }


}
