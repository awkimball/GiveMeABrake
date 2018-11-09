import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fadeAnimation
  ]
})
export class AppComponent {
    title = 'GiveMeABrake';
    loggedIn: boolean;

    constructor() {
        
    }

    prepareRoute(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }

}
