import { Component } from '@angular/core';
import { MesaFormService } from './mesa-form.service';

@Component({
  selector: 'app-form-mesa',
  templateUrl: './form-mesa.component.html',
  styleUrls: ['./form-mesa.component.css']
})
export class FormMesaComponent {


  constructor(private servico: MesaFormService){}

  mesa = {
    nome: "Mesa 5",
    reservado: false,
    reservaName: "Cleiton Silva",
    itemList: [],
    status: "ocupado",
    obs: ""
  }


  incluir(){
    
    this.servico.incluirMesa(this.mesa).subscribe(
      () => {
        console.log('Objeto incluido com sucesso');
      },
      (error) => {
        console.error('Erro ao incluir o objeto', error);
      }
    );
  }


}
