import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    setTimeout(() => {
      let slide = document.getElementById('slideText')
      slide.classList.add('motion_in')
    }, 50);
  }

}
