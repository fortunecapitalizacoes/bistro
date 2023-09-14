// dialog.service.ts
import { Injectable } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { PopUpDialogoComponent } from '../pop-up-dialogo/pop-up-dialogo.component';
import { Mesa } from '../models/Mesa';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private dialogRef!: MatDialogRef<any>; // Tipo deve corresponder ao tipo do seu MatDialog

  setDialogRef(dialogRef: MatDialogRef<any>) {
    this.dialogRef = dialogRef;
  }

  afterClosed(): Observable<any> {
    return this.dialogRef.afterClosed();
  }
}
