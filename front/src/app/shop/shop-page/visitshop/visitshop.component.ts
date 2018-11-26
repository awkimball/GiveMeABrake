import { Account } from './../../../domain/models/account';
import { Component, OnInit } from '@angular/core';
import { TrustedStyleString } from '@angular/core/src/sanitization/bypass';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../../../domain/models/review';
import { Shop } from '../../../domain/models/shop';
import { AccountService } from '../../../account.service';
import { Deals } from 'src/app/domain/models/deals';


@Component({
  selector: 'app-visitshop',
  templateUrl: './visitshop.component.html',
  styleUrls: ['./visitshop.component.css']
})
export class VisitshopComponent implements OnInit {
  shop:Shop;
  deals:Deals[]=[];
  reviews:Review[]=[];

  newReview:Review = new Review();

  constructor(public accountService:AccountService) { 
    this.accountService.getShop(+localStorage.getItem('visit')).subscribe(shop =>{
      this.shop = shop[0];

      this.accountService.getDeal(this.shop.idshop).subscribe((alldeals:Deals[])=>{
        this.deals = alldeals;
        console.log(this.shop.idshop)
        this.accountService.getReview(this.shop.idshop).subscribe((allreview:Review[])=>{
          console.log(allreview)
          this.reviews = allreview;

        });
      });
    });
  }

  ngOnInit() {
  }
  addreview() {
    this.newReview.idshop=this.shop.idshop;
    this.newReview.iduser = +localStorage.getItem('uid');
    this.accountService.updateReview(this.newReview).subscribe((re:Review)=>{
      this.accountService.getReview(this.shop.idshop).subscribe((allreview:Review[])=>{
        this.reviews = allreview;
      });
    });
  }

}