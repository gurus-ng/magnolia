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
      message:`A really good session, i learnt 
      alot from sharing our views. It was very interactive, thanks for this!`,
      author: `Participant`
    },
    {
      message:`I enjoyed the fact that we had experts to guide us and resources to take home, it was a very good session.`,
      author: `Participant`
    },
  ]
  formattedItems = [];
  activeItem = 0;
  gallery = [];
  videoUrl = "";
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
}
