import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityComponent } from './security/security.component';
import { LoginComponent } from './login/login.component';
// import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:"login", component:LoginComponent
  },
  {
    path:"users", component:SecurityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
