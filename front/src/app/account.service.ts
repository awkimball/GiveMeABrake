import { Zipcode } from './domain/models/zipcode';
import { Vehicle } from './domain/models/vehicle';
import { Shop } from './domain/models/shop';
import { Review } from './domain/models/review';
import { Deals } from './domain/models/deals';
import { Account } from './domain/models/account'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EmailValidator } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})

export class AccountService {


    protected endPoint = "http://aws.akimball.com:443";

    protected httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'akimball'
        })
    };

    constructor(
        protected httpClient: HttpClient
    ) {}

    login(email: string, pwd: string): Observable<Account[]> {

        let request = {
            "email": email,
            "password": pwd
        };

        return this.httpClient
        .post<Account[]>(`${this.endPoint}/login`, request, this.httpOptions)
        .pipe(catchError(this.handleException));

    }

    getAllusers(): Observable<Account[]> {
        return this.httpClient
        .get<Account[]>(`${this.endPoint}/users`, this.httpOptions)
        .pipe(catchError(this.handleException));
    }

    getById(id: number): Observable<Account> {
        return this.httpClient
        .get<Account>(`${this.endPoint}/user/${id}`, this.httpOptions)
        .pipe(catchError(this.handleException));
    }

    updateUser(id: number, newUser:Account): Observable<Account> {
        return this.httpClient
        .put<Account>(`${this.endPoint}/user/${id}`, newUser,this.httpOptions)
        .pipe(catchError(this.handleException));
    }

    getShop(id: number): Observable<Shop[]> {
        return this.httpClient
        .get<Shop[]>(`${this.endPoint}/user/${id}/shops`, this.httpOptions)
        .pipe(catchError(this.handleException));
    }

    getVehicle(id: number): Observable<Vehicle[]> {
        return this.httpClient
        .get<Vehicle[]>(`${this.endPoint}/user/${id}/vehicles`, this.httpOptions)
        .pipe(catchError(this.handleException));
    }

    register(account: Account): Observable<Account> {
        return this.httpClient
        .post<Account>(`${this.endPoint}/register`, account, this.httpOptions)
        .pipe(catchError(this.handleException));
    }

    update(id: number, account: Account): Observable<Account> {
        return this.httpClient
        .put<Account>(`${this.endPoint}/${id}`, account, this.httpOptions)
        .pipe(catchError(this.handleException));
    }


    addShop(shop:Shop): Observable<Shop> {
        return this.httpClient
        .post<Shop>(`${this.endPoint}/register_shop`, shop, this.httpOptions)
        .pipe(catchError(this.handleException));
    }

    addVehicle(vehicle:Vehicle): Observable<Vehicle> {
        return this.httpClient
        .post<Vehicle>(`${this.endPoint}/add_vehicle`, Vehicle, this.httpOptions)
        .pipe(catchError(this.handleException));
    }

    getNearBy(zip: number): Observable<Shop[]> {
        return this.httpClient
        .get<Shop[]>(`${this.endPoint}/nearby_shops/${zip}`, this.httpOptions)
        .pipe(catchError(this.handleException));
    }

    getAllShop(): Observable<Shop[]> {
        return this.httpClient
        .get<Shop[]>(`${this.endPoint}/shops`, this.httpOptions)
        .pipe(catchError(this.handleException));
    }

    getZips(zip:number): Observable<Zipcode[]> {
        return this.httpClient
        .get<Zipcode[]>(`${this.endPoint}/zip/${zip}`, this.httpOptions)
        .pipe(catchError(this.handleException));
    }

    protected handleException(exception: any) {
        var message = `${exception.status} : ${exception.statusText}\r\n${exception.message}`;
        alert(message);
        return Observable.throw(exception);
    }

    getStatus(): boolean {

        let temp = localStorage.getItem('loggedIn');
        return ((temp == 'true') ? true : (temp == 'false') ? false : false);
    }

}

//test 11/12

