import { Component } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { UsuarioService } from '../servicios/usuario.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  usuario: Usuario = {
    id: 1,
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    tipo: ""
  };

  uTipo = ['Foodtrucker', 'Organizador'];
  submitted = false;

  constructor(private usuarioService:UsuarioService, private router:Router){}
  onSubmit() {
    this.submitted = true;
    console.log(this.usuario);
    this.usuarioService.addUsuario(this.usuario).subscribe(
      res=>this.router.navigate(['/users'])
    );
  }

}
