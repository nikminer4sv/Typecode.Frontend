import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthenticationGuard} from "../pages/authentication/guards/authentication.guard";

const routes: Routes = [
  { path: "", redirectTo: "info", pathMatch: "full" },
  { path: "index", loadChildren: () => import("../pages/index/index.module").then(m => m.IndexModule)},
  { path: "authentication", loadChildren: () => import("../pages/authentication/authentication.module").then(m => m.AuthenticationModule) },
  { path: "profile", loadChildren: () => import("../pages/profile/profile.module").then(m => m.ProfileModule), canActivate: [AuthenticationGuard] },
  { path: "tests", loadChildren: () => import("../pages/tests/tests.module").then(m => m.TestsModule), canActivate: [AuthenticationGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
