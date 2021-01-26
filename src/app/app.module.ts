import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EventosComponent } from './eventos/eventos.component';
import { FoodtrucksComponent } from './foodtrucks/foodtrucks.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { EditarFoodtruckComponent } from './editar-foodtruck/editar-foodtruck.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'users', component: UsuariosComponent },
  { path: 'users/perfil', component: PerfilComponent },
  { path: 'users/perfil/editar', component: EditarPerfilComponent },
  { path: 'foodtrucks', component: FoodtrucksComponent },
  { path: 'eventos', component: EventosComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterFormComponent,
    UsuariosComponent,
    EventosComponent,
    FoodtrucksComponent,
    PerfilComponent,
    EditarPerfilComponent,
    EditarFoodtruckComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
