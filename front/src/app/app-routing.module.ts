import { NearPriceComponent } from './user/nearPrice/nearPrice.component';
import { DealsComponent } from './shop/deals/deals.component';
import { CheckdealComponent } from './shop/checkdeal/checkdeal.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { PricecheckComponent } from './shop/pricecheck/pricecheck.component';
import { VisitshopComponent } from './shop/shop-page/visitshop/visitshop.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'checkdeal', component: CheckdealComponent},
    { path: 'deals', component: DealsComponent},
    { path: 'price', component: PricecheckComponent},
    { path: 'nearPrice', component: NearPriceComponent},
    { path: 'visitshop', component: VisitshopComponent},
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
