import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FormMesaComponent } from '../form-mesa/form-mesa.component';
@Component({
  selector: 'pop-up-dialogo',
  templateUrl: './pop-up-dialogo.component.html',
  styleUrls: ['./pop-up-dialogo.component.css']
})
export class PopUpDialogoComponent {


  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(FormMesaComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

