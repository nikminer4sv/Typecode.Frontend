import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import {IndexRoutingModule} from "./index-routing.module";
import { TyperComponent } from './components/typer/typer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    IndexComponent,
    TyperComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    FormsModule
  ]
})
export class IndexModule { }
