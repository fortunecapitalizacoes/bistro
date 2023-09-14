import { Component, OnInit, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MesaServiceService } from './services/mesa-service.service';
import { MatDialogRef } from '@angular/material/dialog';
import { PopUpDialogoComponent } from '../pop-up-dialogo/pop-up-dialogo.component';
import { DialogService } from '../serice/observador-matdialog-close';

@Component({
  selector: 'mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent implements OnInit{
  dados: any;

  

  constructor(private mesaService: MesaServiceService, private dialogService: DialogService){}

  public ngOnInit(): void {
    this.atualizarMesas()
  }


  public atualizarMesas(){
    this.mesaService.getMesas().subscribe(data => {
      this.dados = data;
    });
  }

  listenToDialog() {
    this.dialogService.afterClosed().subscribe((result) => {
      console.log('Dialog foi fechado com resultado:', result);

    });
  }

  
  delete(mesa: any){
   
    console.log(mesa)
    this.mesaService.apagarMesa(mesa.id).subscribe(
      () => {
        console.log('Objeto excluído com sucesso');
        this.atualizarMesas();
      },
      (error) => {
        console.error('Erro ao excluir o objeto', error);
      }
    );
  }

  item = {
    descricao: "Skol 600ml",
    quantidade: 6,
    valorUnitario: 6.30,
    valorTotal: 37.80
  }

  mesa = {
    nome: "Mesa 1",
    reservado: false,
    reservaName: "Cleiton Silva",
    itemList: [this.item],
    status: ["Disponível", "Reservado", "Ocupada"],
    obs: "Reserva para 8 pessoas"
  }
  


  

}
