
import { Owner } from './domain/models/owner';
import { Driver } from './domain/models/driver';
import { Account } from './domain/models/account'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class AccountService {

    protected endPoint = "http://aws.akimball.com:8080";

    protected httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'akimball'
        })
    };

    constructor(
        protected httpClient: HttpClient
    ) {}

    getById(id: number): Observable<Account> {
        return this.httpClient
        .get<Account>(`${this.endPoint}/user/${id}`, this.httpOptions)
        .pipe(catchError(this.handleException));
    }

    add(account: Account): Observable<Account> {
        return this.httpClient
        .post<Account>(this.endPoint, account, this.httpOptions)
        .pipe(catchError(this.handleException));
    }

    update(id: number, account: Account): Observable<Account> {
        return this.httpClient
        .put<Account>(`${this.endPoint}/${id}`, account, this.httpOptions)
        .pipe(catchError(this.handleException));
    }

    protected handleException(exception: any) {
        var message = `${exception.status} : ${exception.statusText}\r\n${exception.message}`;
        alert(message);
        return Observable.throw(exception);
    }

}



