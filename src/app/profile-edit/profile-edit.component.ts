import { Component, OnInit } from '@angular/core';
import { AccountService } from './../account.service';


@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  constructor(public accountService:AccountService) { }

  ngOnInit() {
  }

}
