import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const window: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navViewPort = true;
  dropdown = false;
  route = false;
  url = '';
  constructor(
    private router: Router
  ) { }
  ngOnInit(): void {
    this.url = this.router.url;
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 50) {
      this.navViewPort = false;
    } else{
        this.navViewPort = true;
    }
  }
  menu(){
    let slide = document.getElementById('menu')
    slide.classList.toggle('slide_in')
  }
  toggleDrpdown(){
    this.dropdown = !this.dropdown;
  }
}
