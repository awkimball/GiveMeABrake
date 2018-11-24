import { DealsComponent } from './deals/deals.component';
import { CheckdealComponent } from './checkdeal/checkdeal.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { VisitshopComponent } from './shop/visitshop/visitshop.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { RatingComponent } from './shop/rating/rating.component';


const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'checkdeal', component: CheckdealComponent},
    { path: 'deals', component: DealsComponent},
    { path: 'visitshop', component:VisitshopComponent },
    { path: 'rating', component:RatingComponent },
    { path: 'profile', data: {animation: 'profile'},
        children: [
            {path: '', component: ProfileComponent},
            {path: 'edit', component: ProfileEditComponent}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)] ,
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
