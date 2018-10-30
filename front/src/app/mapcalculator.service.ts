import { Zipcode } from './domain/zipcode';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapcalculatorService {

  firstZip:Zipcode = new Zipcode();
  secondZip:Zipcode = new Zipcode();

  zipcodes: Zipcode[] = [];

constructor() {
  this.zipcodes = [{zip:75205,lat:32.835893, lng:-96.795514},{zip:75206,lat:32.831279, lng:-96.771191}
  ,{zip:75207,lat:32.786796, lng:-96.819971}];
 }


  calculateDistance(first:number, second:number) {
    this.getZipcode(first, second);

    return this.calculatezip();
  }

  getZipcode(first:number, second:number) {
    for(const zi of this.zipcodes) {
      if(zi.zip === first) {
        this.firstZip = zi;
      }
    }

    for(const zi of this.zipcodes) {
      if(zi.zip === second) {
        this.secondZip = zi;
      }
    }
  }

  calculatezip() {
    this.firstZip.lat *= (180/Math.PI);
    this.firstZip.lng *= (180/Math.PI);
    this.secondZip.lat *= (180/Math.PI);
    this.secondZip.lng *= (180/Math.PI);

                                  // tslint:disable-next-line:max-line-length
    const result1 = Math.abs( Math.atan( Math.sqrt( Math.pow(( Math.cos(this.secondZip.lat)*Math.sin(Math.abs(this.secondZip.lng-this.firstZip.lng))),2) + Math.pow((Math.cos(this.firstZip.lat)*Math.sin(this.secondZip.lat)-Math.sin(this.firstZip.lat)*Math.cos(this.secondZip.lat)*Math.cos( Math.abs(this.secondZip.lng-this.firstZip.lng)) ),2 ))/
                              // tslint:disable-next-line:max-line-length
                              ( Math.sin(this.firstZip.lat)*Math.sin(this.secondZip.lat) + Math.cos(this.firstZip.lat)*Math.cos(this.secondZip.lat)*Math.cos(Math.abs(this.firstZip.lng-this.secondZip.lng))   )  ) );
                              return result1;
                            }
}
