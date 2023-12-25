import { NgModule } from '@angular/core';
import {AuthenticationModule} from "./authentication/authentication.module";
import {IndexModule} from "./index/index.module";
import {ProfileModule} from "./profile/profile.module";



@NgModule({
  exports: [
    IndexModule,
    AuthenticationModule,
    ProfileModule
  ]
})
export class PagesModule { }
