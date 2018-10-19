import { Component, OnInit } from '@angular/core';
import { Account } from './../domain/models/account';
import { DeptService } from '../dept.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  account: Account;

  constructor(private deptService: DeptService) { }

  ngOnInit() {

    this.account = {

      name: 'Addison Kimball',
      email: 'addison@akimball.com',
      password: 'password',
      typeofaccount: 1
    };


  }


}
