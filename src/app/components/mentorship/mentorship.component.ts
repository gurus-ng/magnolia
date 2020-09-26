import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ImageService } from './../../Services/image.service';
import { LightboxComponent } from './../lightbox/lightbox.component';

@Component({
  selector: 'app-mentorship',
  templateUrl: './mentorship.component.html',
  styleUrls: ['./mentorship.component.scss']
})
export class MentorshipComponent implements OnInit {
  gallery = [];
  constructor(
    private matDialog: MatDialog,
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
    this.getGallery();
    setTimeout(() => {
      let slide = document.getElementById('slideText')
      slide.classList.add('motion_in')
    }, 50);
  }
  async getGallery(){
    let res:any = await this.imageService.getGallery();
    this.gallery = res;
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

}
