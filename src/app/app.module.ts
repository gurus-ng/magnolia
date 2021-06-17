import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { IntenshipComponent } from './components/intenship/intenship.component';
import { LightboxComponent } from './components/lightbox/lightbox.component';
import { MentorshipComponent } from './components/mentorship/mentorship.component';
import { OpenTalkComponent } from './components/open-talk/open-talk.component';
import { AltNavbarComponent } from './partials/alt-navbar/alt-navbar.component';
import { FooterComponent } from './partials/footer/footer.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    MentorshipComponent,
    AltNavbarComponent,
    IntenshipComponent,
    OpenTalkComponent,
    ContactComponent,
    LightboxComponent,
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
