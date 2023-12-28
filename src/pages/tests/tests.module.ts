import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestsComponent } from './tests.component';
import {TestsRoutingModule} from "./tests-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    TestsComponent
  ],
  imports: [
    CommonModule,
    TestsRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule
  ]
})
export class TestsModule { }
