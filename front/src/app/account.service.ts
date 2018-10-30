
import { Owner } from './domain/owner';
import { Driver } from './domain/driver';
import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AccountService {

  // driverAccounts:Driver[] = [];

  // drivers= new Subject<Driver[]>();
  // ownerss= new Subject<Owner[]>();

  defaultDriver: Driver[] = [];
  defaultOwner: Owner[] =[];

  accountType: boolean;

  setDriver: Driver = new Driver;
  setOwner: Owner = new Owner;

  constructor() {
    this.defaultDriver = [{
      username: 'Docker',
      password: 'password',
      email:'docker@gmail.com',
      zipcode: 75205,
      phone:2145005550,
      name: 'Yu Chen',
      vehicles: [{
        make: 'make',
        model: 'Camry',
        year: 1997,
        miles: 2000,
        oilChangeDate: new Date('February 4, 2016 10:13:00'),
        tireChangeDate: new Date('February 4, 2016 10:13:00'),
        transimissionCheck:new Date('February 4, 2016 10:13:00'),
        inspection: new Date('February 4, 2016 10:13:00'),
        generalDisc: 'general'

      }]}],

    this.defaultOwner =[ {
      username:'owner',
      password:'123',
      email:'owner@gmail.com',
      zipcode:75205,
      phone:2146003333,
      name:'Coyle Frank',

      workingEmail:'bestshop@gmail.com',
      description:'this is the best gas station in the world',
      review:['it is best!','i love it','fuck this station'],
      deals:['10% discount for gas!','buy one Coke get one free!']
    //  picutre:HTMLImageElement;
    },{
      username:'owner2',
      password:'123',
      email:'owner2@gmail.com',
      zipcode:75205,
      phone:2146003334,
      name:'Addison Kimball',

      workingEmail:'addison@gmail.com',
      description:'this is the best gas station in the world',
      review:['it is best!','i love it','fuck this station'],
      deals:['20% discount for gas!','buy one Sprite get one free!']
    //  picutre:HTMLImageElement;
    }, {
      username:'owner3',
      password:'123',
      email:'owner3@gmail.com',
      zipcode:75205,
      phone:2146003335,
      name:'Ova Butter',

      workingEmail:'ova@gmail.com',
      description:'this is the best gas station in the world',
      review:['it is best!','i love it','fuck this station'],
      deals:['15% discount for gas!','buy one Dr.Pepper get one free!']
    //  picutre:HTMLImageElement;
    }];

}
  // addDriver(newdriver:Driver[]) {
  //   this.drivers.next(newdriver);
  // }

  // getDriver(): Observable<Driver[]> {
  //   return this.drivers.asObservable();
  // }
}
