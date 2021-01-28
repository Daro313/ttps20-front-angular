import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../servicios/usuario.service';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { Usuario } from '../modelos/usuario';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario = {
    id: 1,
    nombre: '',
    apellido:'',
    email: '',
    password: '',
    tipo:''
  }
  error = '';
  submitted = false;

  constructor(private autenticacionService:AutenticacionService, private router:Router) {
  }

  ngOnInit(): void {
    this.autenticacionService.logout();
  }

  onSubmit() {
    this.submitted = true;
    this.autenticacionService.login(this.usuario.email, this.usuario.password)
    .pipe(first())
    .subscribe(data => {
      this.router.navigate(['/users/perfil']);
    },
    //error => console.log(error)
    error => {
      this.error = 'Compruebe el nombre de usuario o la contraseña';
    });
   }

}
