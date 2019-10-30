import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuGuard } from './au.guard';





const routes: Routes = [
  
  {path:'',pathMatch:'full',redirectTo:'login'},
{path:'login',component:LoginComponent},
{path:'admin',component:AdminComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
