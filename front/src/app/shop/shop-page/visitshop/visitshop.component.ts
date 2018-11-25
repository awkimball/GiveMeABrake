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
  deals:Deals[];
  reviews:Review[];

  newReview:Review = new Review();

  constructor(public accountService:AccountService) { 
    this.accountService.getShop(+localStorage.getItem('visit')).subscribe(shop =>{
      this.shop = shop[0];

      this.accountService.getDeal(this.shop.idshop).subscribe((alldeals:Deals[])=>{
        this.deals = alldeals;

        // this.accountService.getAllusers().subscribe((alluser:Account[])=>{
        //   for(let user of alluser){
        //     this.accountService.getReview(user.iduser,this.shop.idshop).subscribe((allreview:Review[])=>{
        //       if(allreview.length>0) {
        //         for(let re of allreview){
        //           this.reviews.push(re);
        //         }
        //       }
        //     });
        //   }
        // });
      });
    });
  }

  ngOnInit() {
  }
  addreview() {
    // this.samplereview.shop_name=this.shopname;
    // this.samplereview.idusers=1;
    // this.reviewlist.push(this.samplereview);
    // this.accountService.addreview(this.samplereview).subscribe(rev => {});

    // this.samplereview=new Review();

  }

}