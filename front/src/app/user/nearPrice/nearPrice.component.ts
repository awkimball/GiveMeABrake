import { Zipcode } from './../../domain/models/zipcode';
import { Account } from './../../domain/models/account';
import { MapcalculatorService } from './../../mapcalculator.service';
import { Router } from '@angular/router';
import { AccountService } from './../../account.service';
import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/domain/models/shop';

@Component({
  selector: 'app-nearPrice',
  templateUrl: './nearPrice.component.html',
  styleUrls: ['./nearPrice.component.css']
})
export class NearPriceComponent implements OnInit {
  othershop:Shop[] = [];
  distance: {userid,number}[] = [];

  result:{Shop,number}[]=[];

  constructor(public accountService:AccountService, public router:Router, public mapcalculatorService:MapcalculatorService) {
    this.othershop = [];
    this.distance = [];
    this.result=[];
      this.accountService.getZips().subscribe((allZip:Zipcode[]) => {
        this.accountService.getAllusers().subscribe((users:Account[]) => {
          for (var eachUser of users) {
            if( eachUser.account_type == 1) {
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
                      this.combine();
                    });
                  }
              
            }
          }
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
    
      for(let i =0; i<this.distance.length;i++){
        for(let j =0;j<this.distance.length-1;j++){
          if(this.distance[j].number>this.distance[j+1].number){
            let swap = this.distance[j];
            this.distance[j]= this.distance[j+1];
            this.distance[j+1]=swap;

            let swap2 = this.othershop[j];
            this.othershop[j]= this.othershop[j+1];
            this.othershop[j+1]=swap2;
          }
        }
      }
      for(let i =0; i<this.distance.length;i++){
    
        this.result.push({Shop: this.othershop[i], number: this.distance[i].number});
      }
    }
  }

  visit(idshop:number) {
    localStorage.setItem('visit',`${idshop}`);
    this.router.navigate(['visitshop']);
  }

}
