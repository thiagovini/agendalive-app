import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LiveFormDialogComponent } from './live-form-dialog/live-form-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public dialogModule: MatDialogModule
  ) { }

  ngOnInit(): void {
  }

  addLive(): void {
    const dialogRef = this.dialog.open(LiveFormDialogComponent, {
      minWidth: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
