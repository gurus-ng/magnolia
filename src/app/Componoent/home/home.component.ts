import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  testimonials = [
    {
      message:`This was an interesting session, i learnt 
      alot from sharing our views. It was very interactive, thanks for this!`,
      author: `Support Group Session`
    },
    {
      message:`I loved the fact that we had experts to guide us and resources to take home, it was a very good session.`,
      author: `Support Group Session`
    },
    {
      message:`A really good session, i learnt 
      alot from sharing our views. It was very interactive, thanks for this!`,
      author: `Mentorship group Attendant`
    },
    {
      message:`I enjoyed the fact that we had experts to guide us and resources to take home, it was a very good session.`,
      author: `Kwesi Peters`
    },
  ]
  formattedItems = [];
  activeItem = 0;
  constructor() { }

  ngOnInit(): void {
    $('#carousel').carousel({
      interval: 5000
    })
    if ($('#carousel').carousel(1).hasClass('active')) {
      alert("this is an alert");
  }
    let size = 2;
    this.formattedItems = new Array(Math.ceil(this.testimonials.length / size)).fill("")
    .map(function() { 
      return this.splice(0, size) }, this.testimonials.slice()
    );
  }
  collapseDropdown(){
    
  }
  moveCarousel(i){
    this.activeItem = i;
    $('#carousel').carousel(i);
  }
}
