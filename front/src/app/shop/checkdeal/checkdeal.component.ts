import { Zipcode } from './../../domain/models/zipcode';
import { Account } from './../../domain/models/account';
import { Deals } from 'src/app/domain/models/deals';
import { Shop } from '../../domain/models/shop';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './../../account.service';
import { Router } from '@angular/router';
import { MapcalculatorService } from 'src/app/mapcalculator.service';

@Component({
  selector: 'app-checkdeal',
  templateUrl: './checkdeal.component.html',
  styleUrls: ['./checkdeal.component.css']
})
export class CheckdealComponent implements OnInit {

  shop:Shop;

  othershop:Shop[] = [];
  distance: {userid, number}[] = [];
  alldeals:Deals[][]=[];

  noDeals:boolean[] =[];

  result:{Shop,Deals,number,IsEmpty}[]=[];

  newGas:number =0;

  constructor(public accountService:AccountService, public router:Router, public mapcalculatorService:MapcalculatorService) {

    this.accountService.getShop(+localStorage.getItem('uid')).subscribe((shop) => {

      this.shop=shop[0];
      this.accountService.getZips().subscribe((allZip:Zipcode[]) => {
        this.accountService.getAllusers().subscribe((users:Account[]) => {
          for (var eachUser of users) {
            if(eachUser.iduser != this.shop.iduser && eachUser.account_type == 1) {
                  var z1,z2:Zipcode;
                  for(let z of allZip){
                    if(eachUser.zipcode == z.zipcode){
                      z1 = z;
                    }
                    if(+localStorage.getItem('zip') == z.zipcode){
                      z2 =z;
                    }
                  }
                  var dis = this.mapcalculatorService.calculateDistance(z1,z2);

                  if(dis <1) {
                    this.distance.push({userid:eachUser.iduser, number:dis});
                    this.accountService.getShop(eachUser.iduser).subscribe((nearShop:Shop[]) =>{
                      this.othershop.push(nearShop[0]);
                      this.accountService.getDeal(nearShop[0].idshop).subscribe((shopDeals:Deals[]) =>{
                      this.alldeals.push(shopDeals);

                        if(this.alldeals.length == this.othershop.length ){
                          this.combine();
                        }
                      });
                    });
                  }
              
            }
          }
        });
      });
    });

  }

  ngOnInit() {
  }

  combine(){

    if(this.othershop.length==this.distance.length){
      var newShop:Shop[]=[];
      for(let i =0; i<this.distance.length;i++){
        for(let j =0; j<this.distance.length;j++){
          if(this.othershop[j].iduser == this.distance[i].userid){
            newShop.push(this.othershop[j]);
          }
        }
      }
      this.othershop = newShop;

      var newDeal:Deals[][] =[];
      var isEmp:boolean;
      for(let i =0; i<this.distance.length;i++){
        isEmp = true;
        for(let j =0; j<this.distance.length;j++){
          if(this.alldeals[j].length>=1){
            if(this.alldeals[j][0].idshop==this.othershop[i].idshop){
              newDeal.push(this.alldeals[j]);
              isEmp =false;
            }
          }
          
        }
        
        if(isEmp){
          var emp:Deals[] =[];
          newDeal.push(emp);
        }
      }
      this.alldeals = newDeal;
    
      for(let i =0; i<this.distance.length;i++){
        for(let j =0;j<this.distance.length-1;j++){
          if(this.distance[j].number>this.distance[j+1].number){
            let swap = this.distance[j];
            this.distance[j]= this.distance[j+1];
            this.distance[j+1]=swap;

            let swap2 = this.othershop[j];
            this.othershop[j]= this.othershop[j+1];
            this.othershop[j+1]=swap2;

            let swap3 = this.alldeals[j];
            this.alldeals[j]= this.alldeals[j+1];
            this.alldeals[j+1]=swap3;
          }
        }
      }
      for(let i =0; i<this.distance.length;i++){
    
        this.result.push({Shop: this.othershop[i], number: this.distance[i].number,Deals: this.alldeals[i],IsEmpty:this.noDeals[i]});
      }
    }
  }

  visit(iduser:number) {
    localStorage.setItem('visit',`${iduser}`);
    this.router.navigate(['visitshop']);
  }

}
