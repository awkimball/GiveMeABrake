import { Component, OnInit } from '@angular/core';
import { AccountService } from './../account.service';
import { RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']

})




export class ProfileComponent implements OnInit {
  ngOnInit(): void {

  }

  constructor(public accountService:AccountService) {


  }

  prepareRoute(outlet: RouterOutlet) {

    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
