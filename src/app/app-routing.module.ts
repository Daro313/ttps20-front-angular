import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { FoodtruckListComponent } from './components/foodtrucks-list/foodtruck-list.component'

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: UserFormComponent },
  { path: 'users/perfil', component: PerfilComponent, canActivate:[AuthGuard]},
  { path: 'users/perfil/editar/:id', component: UserFormComponent, canActivate:[AuthGuard] },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [
  LoginComponent,
  UserFormComponent,
  PerfilComponent,
  FoodtruckListComponent
]
