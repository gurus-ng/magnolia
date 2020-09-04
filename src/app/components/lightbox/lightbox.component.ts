import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent implements OnInit {
  activeIndex: 0;
  img;
  constructor(
    private dialogRef: MatDialogRef<LightboxComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
  ) { }

  ngOnInit(): void {
    this.activeIndex = this.dialogData.active;
    this.img = this.dialogData.gallery[this.activeIndex];
  }
  next(){
    this.activeIndex += 1;
    this.img = this.dialogData.gallery[this.activeIndex];
  }
  prev(){
    this.activeIndex -= 1;
    this.img = this.dialogData.gallery[this.activeIndex];
  }
  close() {
    this.dialogRef.close();
  }
}
