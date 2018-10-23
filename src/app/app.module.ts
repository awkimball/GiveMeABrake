import { NavServiceService } from './nav-service.service';
import { AccountService } from './account.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';



@NgModule({
   declarations: [
      AppComponent,
      ProfileComponent,
      HomeComponent,
      LoginComponent,
      NavbarComponent,
      ProfileEditComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      BrowserAnimationsModule
   ],
   providers: [
      AccountService,
      NavServiceService
   ],
   bootstrap: [
      AppComponent,
      HomeComponent
   ]
})
export class AppModule {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}


