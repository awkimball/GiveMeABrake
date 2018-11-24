import { MapcalculatorService } from './mapcalculator.service';
import { SignupComponent } from './signup/signup.component';
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
import { CheckdealComponent } from './checkdeal/checkdeal.component';
import { DealsComponent } from './deals/deals.component';
import { HttpClientModule } from '@angular/common/http';
import { VisitshopComponent } from './shop/visitshop/visitshop.component';
import { RatingComponent } from './shop/rating/rating.component';




@NgModule({
   declarations: [
      AppComponent,
      ProfileComponent,
      HomeComponent,
      LoginComponent,
      NavbarComponent,
      ProfileEditComponent,
      SignupComponent,
      CheckdealComponent,
      DealsComponent,
      VisitshopComponent,
      RatingComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule
   ],
   providers: [
      AccountService,
      MapcalculatorService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}


