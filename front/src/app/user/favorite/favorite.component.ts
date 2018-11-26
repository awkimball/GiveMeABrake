import { Favorites } from './../../domain/models/favorites';
import { Deals } from 'src/app/domain/models/deals';
import { Account } from './../../domain/models/account';
import { Router } from '@angular/router';
import { AccountService } from './../../account.service';
import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/domain/models/shop';
import { combineAll } from 'rxjs/operators';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  favors:Favorites[]=[];

  shop:Shop[]=[];
  allDeal:Deals[][]=[];
  isNotify:boolean[]=[];
  result:{shopUserId,shopName,isNotify}[] =[];

  constructor(public accountService:AccountService, public router:Router) {
    this.accountService.getFavor(+localStorage.getItem('uid')).subscribe((favor:Favorites[])=>{
      
      this.favors = favor;
      if(this.favors.length>0){
        this.accountService.getAllShop().subscribe((allShop:Shop[]) =>{
          for(let f of favor){
            for(let s of allShop){
              
              if(f.idshop == s.idshop){
                this.shop.push(s);
              }
            }
          }

          for(let s of this.shop){
            this.accountService.getDeal(s.idshop).subscribe((eachDeal:Deals[])=>{
              this.allDeal.push(eachDeal);

              if(this.shop.length == this.allDeal.length){
                this.combine();
              }
            });
          }

        });
      }
    });

  }

  ngOnInit() {
  }

  combine(){
    var newDeal:Deals[][] =[];
    var isEmp:boolean;
    for(let i =0; i<this.shop.length;i++){
      isEmp = true;
      for(let j =0; j<this.shop.length;j++){
        if(this.allDeal[j].length>=1){
          if(this.allDeal[j][0].idshop==this.shop[i].idshop){
            newDeal.push(this.allDeal[j]);
            isEmp =false;
          }
        }
        
      }
      
      if(isEmp){
        var emp:Deals[] =[];
        newDeal.push(emp);
      }
    }
    this.allDeal = newDeal;


    for(let d of this.allDeal){
      if(d.length==0){
        this.isNotify.push(false);
      }
      else{
        var notify:boolean = false;
        for(let deal of d){
          if(deal.notify == 1){
            notify = true;
          }
        }
        this.isNotify.push(notify);
      }
    }

    for(let i =0;i<this.allDeal.length;i++){
      this.result.push({shopUserId:this.shop[i].iduser,shopName:this.shop[i].shop_name,isNotify:this.isNotify[i]});
    }
  }

}
