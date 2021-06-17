import { ImageService } from './../../Services/image.service';
import { LightboxComponent } from './../lightbox/lightbox.component';
import { gallery } from './../images';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  testimonials = [
    {
      message:`This was an interesting session, i learnt 
      a lot from sharing our views. It was very interactive, thanks for this!`,
      author: `Participant`
    },
    {
      message:`I loved the fact that we had experts to guide us and resources to take home, it was a very good session.`,
      author: `Support Group Session`
    },
    {
      message:`I really enjoyed this program and this is my first time attending a program like this. I think it is interesting and really learnt a lot.`,
      author: `Participant`
    },
    {
      message:`A really good session, i learnt 
      alot from sharing our views. It was very interactive, thanks for this!`,
      author: `Participant`
    },
    {
      message:`I enjoyed the fact that we had experts to guide us and resources to take home, it was a very good session.`,
      author: `Participant`
    },
    {
      message:`Was awesome! Was super great. Hope there will be a lot more of programs like this to help. Plus the cocktail was dope!`,
      author: `Participant`
    },
    {
      message:`
It was a well organized program. Ability to engage freely with the resource person was helpful. Thank you.`,
      author: `Participant`
    },
  ]
  formattedItems = [];
  activeItem = 0;
  gallery = [];
  videoUrl = "";
  email: any;

  constructor(
    private matDialog: MatDialog,
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
    this.getGallery();
    this.getVideo();
    $('#carousel').carousel({
      interval: 5000
    })
    setTimeout(() => {
      let slide = document.getElementById('slideText')
      slide.classList.add('motion_in')
    }, 50);
    if ($('#carousel').carousel(1).hasClass('active')) {
      //alert("this is an alert");
  }
    let size = 2;
    this.formattedItems = new Array(Math.ceil(this.testimonials.length / size)).fill("")
    .map(function() { 
      return this.splice(0, size) }, this.testimonials.slice()
    );
  }
  collapseDropdown(){
    
  }
  async getGallery(){
    let res:any = await this.imageService.getGallery();
    this.gallery = res;
  }
  async getVideo(){
    let res:any = await this.imageService.getVideo();
    this.videoUrl = res;
  }
  open(index: number): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = {
      active: index,
      gallery: this.gallery
    }
    dialogConfig.autoFocus = true;
    dialogConfig.width = '764px';
    dialogConfig.hasBackdrop = true;
    dialogConfig.closeOnNavigation = true;
    this.matDialog.open(LightboxComponent, dialogConfig);  
  }
  moveCarousel(i){
    this.activeItem = i;
    $('#carousel').carousel(i);
  }
  play(){
    let myVideo: any = document.getElementById("my_video");
    myVideo.play();
  }
  stopVideo(){
    let myVideo: any = document.getElementById("my_video");
    myVideo.pause();
  }

  emailSubmit() {
    console.log(this.email)
  }
}
