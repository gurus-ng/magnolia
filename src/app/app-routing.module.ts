import { HomeComponent } from './Componoent/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'', component:HomeComponent,
    data: {title: 'Homepage | Magnolia Community'}
  },
  {
    path:'about-us', component:HomeComponent,
    data: {title: 'About Us | Magnolia Community'}
  },
  {
    path:'programs', component:HomeComponent,
    data: {title: 'Programs | Magnolia Community'}
  },
  {
    path:'programs/mentorship', component:HomeComponent,
    data: {title: 'Programs | Mentorship | Magnolia Community'}
  },
  {
    path:'programs/intenship', component:HomeComponent,
    data: {title: 'Programs | Intenship | Magnolia Community'}
  },
  {
    path:'programs/open-talk', component:HomeComponent,
    data: {title: 'Programs | Open Talk | Magnolia Community'}
  },
  {
    path:'contact-us', component:HomeComponent,
    data: {title: 'Contact Us | Magnolia Community'}
  },
  {
    path:'**', redirectTo: '',
    data: {title: 'Programs | Mentorship | Magnolia Community'}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
