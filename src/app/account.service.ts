import { Vehicle } from './domain/vehicle';
import { Owner } from './domain/owner';
import { Driver } from './domain/driver';
import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AccountService {

  driverAccounts:Driver[] = [];

  drivers= new Subject<Driver[]>();
  ownerss= new Subject<Owner[]>();




  constructor() {

}
  addDriver(newdriver:Driver[]) {
    this.drivers.next(newdriver);
  }

  getDriver(): Observable<Driver[]> {
    return this.drivers.asObservable();
  }
}
