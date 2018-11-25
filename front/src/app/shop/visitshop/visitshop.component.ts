import { Component, OnInit } from '@angular/core';
import { TrustedStyleString } from '@angular/core/src/sanitization/bypass';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../../domain/models/review';
import { Shop } from '../../domain/models/shop';
import { AccountService } from '../../account.service';


@Component({
  selector: 'app-visitshop',
  templateUrl: './visitshop.component.html',
  styleUrls: ['./visitshop.component.css']
})
export class VisitshopComponent implements OnInit {
  shop:Shop[] =[];
  reviewlist: Review[] =[];
  samplereview: Review={};

  shopid=1;
  
  

  comment: string; 

  gasprice=80;
  address="test_address";
  email="test_email";
  description="test_description";


  shopname="test_shopname";
  shopdeal=["first_deal","second_deal","third_deal"];


  constructor(public accountService:AccountService) { 

  }

  ngOnInit() {
    this.accountService.getShop(1).subscribe((newshop) => {this.shop = newshop;
    });
  }
  addreview() {
    this.samplereview.shop_name=this.shopname;
    this.samplereview.idusers=1;
    this.reviewlist.push(this.samplereview);
    
    this.samplereview={};

  }

}
