import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { UsuarioService } from '../servicios/usuario.service';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario = {
    userId: 0,
    nombre: '',
    apellido:'',
    email: '',
    password: '',
    rol:''
  }

  constructor(private autenticacionService:AutenticacionService, private usuarioService:UsuarioService, private router:Router) { }

  ngOnInit(): void {
    this.getUsuarioById();
  }

  getUsuarioById() {
    this.usuarioService.getUsuarioById(this.autenticacionService.currentUserValue.userId!, this.autenticacionService.currentUserValue.rol)
      .subscribe(data => this.usuario = data );
  }

  logout() {
    this.autenticacionService.logout();
    this.router.navigate(['/login']);
  }

  verFoodtrucks(): void{

  }

}
