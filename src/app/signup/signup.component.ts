import { Owner } from './../domain/owner';
import { Vehicle } from './../domain/vehicle';
import { Driver } from './../domain/driver';

import { Component, OnInit } from '@angular/core';
import { NavServiceService } from './../nav-service.service';
import { AccountService } from './../account.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  newDriver:Driver = new Driver();
  newOwner:Owner = new Owner();
  newCar:Vehicle = new Vehicle();

  addACar:boolean;

  savedDriver:Driver[] = [];
  saveOwner:Owner[] = [];
  defaultDriver: Driver= new Driver();
  defaultOwner:Owner = new Owner();

  constructor(public accountService:AccountService, public navServiceService:NavServiceService) {
    this.defaultDriver = {
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

      }]},

    this.defaultOwner = {
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
    };

    this.savedDriver.push(this.defaultDriver);
    this.saveOwner.push(this.defaultOwner);
  }

  ngOnInit() {



  }



  saveAccount() {
 //   this.newDriver.vehicles.push(this.newCar);
  //  this.savedDriver.push(this.newDriver);

    console.log(this.savedDriver);

    this.accountService.addDriver(this.savedDriver);
  }

}
