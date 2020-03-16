import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path:'', redirectTo:"/login", pathMatch: 'full'},
  {path:'login', loadChildren:"./login/login.module#LoginModule"}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{useHash: true})
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
