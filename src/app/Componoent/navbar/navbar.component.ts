
import { Component, OnInit } from '@angular/core';
import { HostListener, Inject } from "@angular/core";
declare const window: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navViewPort = true;
  dropdown = false;
  route  = false
  constructor() { }
  ngOnInit(): void {
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
    slide.classList.toggle('motion_in')
  }
  toggleDrpdown(){
    this.dropdown = !this.dropdown;
  }
}
