import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { MentorshipComponent } from './components/mentorship/mentorship.component';
import { AltNavbarComponent } from './partials/alt-navbar/alt-navbar.component';
import { FooterComponent } from './partials/footer/footer.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { IntenshipComponent } from './components/intenship/intenship.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    MentorshipComponent,
    AltNavbarComponent,
    IntenshipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
