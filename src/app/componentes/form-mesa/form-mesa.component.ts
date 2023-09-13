import { Component } from '@angular/core';
import { MesaFormService } from './mesa-form.service';
import { MatDialogRef } from '@angular/material/dialog';
import { PopUpDialogoComponent } from '../pop-up-dialogo/pop-up-dialogo.component';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-mesa',
  templateUrl: './form-mesa.component.html',
  styleUrls: ['./form-mesa.component.css']
})
export class FormMesaComponent {

  formulario: FormGroup;
  constructor(private servico: MesaFormService, public dialogRef: MatDialogRef<PopUpDialogoComponent>,private fb: FormBuilder){
    this.formulario = this.fb.group({
      nome: ['', []],
      status: ['', []],
    });
  }

  

 

  closeDialog(){
    this.dialogRef.close()
  }

  incluir(){
   let mesa = {
      nome: this.formulario.value.nome,
      reservado: false,
      reservaName: "",
      itemList: [],
      status: this.formulario.value.status,
      obs: ""
    }

    this.servico.incluirMesa(mesa).subscribe(
      () => {
        console.log('Objeto incluido com sucesso');
        this.dialogRef.close()
      },
      (error) => {
        console.error('Erro ao incluir o objeto', error);
      }
    );
  }


}
