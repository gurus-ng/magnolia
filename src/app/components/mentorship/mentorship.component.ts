import { gallery } from './../images';
import { LightboxComponent } from './../lightbox/lightbox.component';
import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mentorship',
  templateUrl: './mentorship.component.html',
  styleUrls: ['./mentorship.component.scss']
})
export class MentorshipComponent implements OnInit {
  gallery = gallery;
  constructor(
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      let slide = document.getElementById('slideText')
      slide.classList.add('motion_in')
    }, 50);
  }
  open(index: number): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = {
      active: index,
      gallery: this.gallery
    }
    dialogConfig.autoFocus = true;
    dialogConfig.width = '576px';
    dialogConfig.hasBackdrop = true;
    dialogConfig.closeOnNavigation = true;
    this.matDialog.open(LightboxComponent, dialogConfig);  
  }

}
