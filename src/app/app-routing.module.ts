import { OpenTalkComponent } from './components/open-talk/open-talk.component';
import { ContactComponent } from './components/contact/contact.component';
import { IntenshipComponent } from './components/intenship/intenship.component';
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
    path:'programs/intenship', component:IntenshipComponent,
    data: {title: 'Programs | Intenship | Magnolia Community'}
  },
  {
    path:'programs/open-talk', component:OpenTalkComponent,
    data: {title: 'Programs | Open Talk Session | Magnolia Community'}
  },
  {
    path:'contact-us', component:ContactComponent,
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
