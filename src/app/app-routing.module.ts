import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'profile', component: ProfileComponent, data: {animation: 'profile'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)] ,
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
