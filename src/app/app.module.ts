import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PagesModule} from "../pages/pages.module";
import { HeaderComponent } from './components/header/header.component';
import {AuthenticationGuard} from "../pages/authentication/guards/authentication.guard";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptor} from "../pages/authentication/guards/token.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [
    AuthenticationGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
