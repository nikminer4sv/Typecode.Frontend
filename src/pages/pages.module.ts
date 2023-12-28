import { NgModule } from '@angular/core';
import {AuthenticationModule} from "./authentication/authentication.module";
import {IndexModule} from "./index/index.module";
import {ProfileModule} from "./profile/profile.module";
import {TestsModule} from "./tests/tests.module";



@NgModule({
  exports: [
    IndexModule,
    AuthenticationModule,
    ProfileModule,
    TestsModule
  ]
})
export class PagesModule { }
