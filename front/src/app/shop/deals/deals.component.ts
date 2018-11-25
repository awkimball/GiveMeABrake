import { Shop } from './../../domain/models/shop';

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

  newDeal:Deals = new Deals();

  isNotify:string="";

  myAllDeal: Deals[];

  shop:Shop
  constructor(public accountService:AccountService) {
    this.accountService.getShop(+localStorage.getItem('uid')).subscribe((shop) => {

      this.shop=shop[0];
      this.accountService.getDeal(this.shop.idshop).subscribe((alldeal:Deals[])=>{
        this.myAllDeal = alldeal;
      });
    });

  }

  ngOnInit() {
  }

  saveDeal(){
    if(this.isNotify=="true"){
      this.newDeal.notify = true;
    }
    else{
      this.newDeal.notify = false;
    }
    this.newDeal.idshop = this.shop.idshop;

    this.accountService.addDeals(this.newDeal).subscribe((deal:Deals)=>{
      this.accountService.getDeal(this.shop.idshop).subscribe((alldeal:Deals[])=>{
        this.myAllDeal = alldeal;
      });
    });
  }

  deleteNew(){
    this.newDeal = new Deals();
    this.isNotify="";
  }

}
