import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '../serice/observador-matdialog-close';
import { FormeAbrirComponent } from '../forme-abrir/forme-abrir.component';

@Component({
  selector: 'abrir',
  templateUrl: './abrir.component.html',
  styleUrls: ['./abrir.component.css']
})
export class AbrirComponent {
  
  constructor(private dialog: MatDialog, private dialogService: DialogService) {}

  openDialog() {
    const dialogRef = this.dialog.open(FormeAbrirComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
