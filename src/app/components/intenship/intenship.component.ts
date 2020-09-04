import { LightboxComponent } from './../lightbox/lightbox.component';
import { Component, OnInit } from '@angular/core';
import { gallery } from '../images';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-intenship',
  templateUrl: './intenship.component.html',
  styleUrls: ['./intenship.component.scss']
})
export class IntenshipComponent implements OnInit {
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
