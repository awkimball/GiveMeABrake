import { AccountService } from './account.service';
import { Zipcode } from './domain/models/zipcode';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapcalculatorService {

  firstZip:Zipcode
  secondZip:Zipcode;

constructor(public accountService:AccountService) {
 }


  calculateDistance(first:Zipcode, second:Zipcode) {
    this.firstZip = first;
    this.secondZip = second;    

    return this.calculatezip();
  }


  calculatezip() {
    var z1la = this.firstZip.latitude * (180/Math.PI);
    var z1lo =this.firstZip.longitude * (180/Math.PI);
    var z2la =this.secondZip.latitude * (180/Math.PI);
    var z2lo =this.secondZip.longitude * (180/Math.PI);

                                  // tslint:disable-next-line:max-line-length
    const result1 = Math.abs( Math.atan( Math.sqrt( Math.pow(( Math.cos(z2la)*Math.sin(Math.abs(z2lo-z1lo))),2) + Math.pow((Math.cos(z1la)*Math.sin(z2la)-Math.sin(z1la)*Math.cos(z2la)*Math.cos( Math.abs(z2lo-z1lo)) ),2 ))/
                              // tslint:disable-next-line:max-line-length
                              ( Math.sin(z1la)*Math.sin(z2la) + Math.cos(z1la)*Math.cos(z2la)*Math.cos(Math.abs(z1lo-z2lo))   )  ) );
                              return result1;
                              
                            }
}
