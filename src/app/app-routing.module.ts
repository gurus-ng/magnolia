import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MentorshipComponent } from './components/mentorship/mentorship.component';


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
    path:'programs/mentorship', component:MentorshipComponent,
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
