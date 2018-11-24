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
    this.firstZip.latitude *= (180/Math.PI);
    this.firstZip.longitude *= (180/Math.PI);
    this.secondZip.latitude *= (180/Math.PI);
    this.secondZip.longitude *= (180/Math.PI);

                                  // tslint:disable-next-line:max-line-length
    const result1 = Math.abs( Math.atan( Math.sqrt( Math.pow(( Math.cos(this.secondZip.latitude)*Math.sin(Math.abs(this.secondZip.longitude-this.firstZip.longitude))),2) + Math.pow((Math.cos(this.firstZip.latitude)*Math.sin(this.secondZip.latitude)-Math.sin(this.firstZip.latitude)*Math.cos(this.secondZip.latitude)*Math.cos( Math.abs(this.secondZip.longitude-this.firstZip.longitude)) ),2 ))/
                              // tslint:disable-next-line:max-line-length
                              ( Math.sin(this.firstZip.latitude)*Math.sin(this.secondZip.latitude) + Math.cos(this.firstZip.latitude)*Math.cos(this.secondZip.latitude)*Math.cos(Math.abs(this.firstZip.longitude-this.secondZip.longitude))   )  ) );
                              return result1;
                            }
}
