import { Component, OnInit } from '@angular/core';
import { Account } from './../domain/models/account';
import { DeptService } from '../dept.service';
import { Department } from '../domain/models/department';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  account: Account;
  departments: Department[];

  constructor(private deptService: DeptService) { }

  ngOnInit() {

    this.account = {

      name: 'Addison Kimball',
      email: 'addison@akimball.com',
      isEmployee: '1',
      deptID: 4

    };



  }

}
