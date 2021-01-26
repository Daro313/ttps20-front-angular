import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../servicios/usuario.service'
import { Usuario } from '../modelos/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private usuario: Usuario = {
    id: 1,
    nombre: '',
    apellido:'',
    email: '',
    password: '',
    tipo:''
  }
  submitted = false;

  constructor(private usuarioService:UsuarioService, private router:Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    this.usuarioService.login(this.usuario.email, this.usuario.password)
    .subscribe(data => {
      this.usuarioService.setUsuarioActual(data);
      this.router.navigate(['/users/perfil']);
    },
    error => console.log(error)
    );
   }

}
