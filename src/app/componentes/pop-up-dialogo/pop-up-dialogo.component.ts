import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FormMesaComponent } from '../form-mesa/form-mesa.component';
import { DialogService } from '../serice/observador-matdialog-close';
@Component({
  selector: 'pop-up-dialogo',
  templateUrl: './pop-up-dialogo.component.html',
  styleUrls: ['./pop-up-dialogo.component.css']
})
export class PopUpDialogoComponent {


  constructor(private dialog: MatDialog, private dialogService: DialogService) {}

  openDialog() {
    const dialogRef = this.dialog.open(FormMesaComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

