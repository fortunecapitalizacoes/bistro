import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MesasComponent } from './componentes/mesas/mesas.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuComponent } from './componentes/menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { PopUpDialogoComponent } from './componentes/pop-up-dialogo/pop-up-dialogo.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormMesaComponent } from './componentes/form-mesa/form-mesa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importe FormsModule e ReactiveFormsModule se você também for usar formulários reativos.
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // Importe os módulos relevantes para os campos de entrada, como mat-input.
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { AbrirComponent } from './componentes/abrir/abrir.component';
import { FormeAbrirComponent } from './componentes/forme-abrir/forme-abrir.component';
import { DetalhesComponent } from './componentes/detalhes/detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    MesasComponent,
    MenuComponent,
    PopUpDialogoComponent,
    FormMesaComponent,
    AbrirComponent,
    FormeAbrirComponent,
    DetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule, 
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
