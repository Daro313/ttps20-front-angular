import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { UsuarioService } from '../servicios/usuario.service';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario;

  constructor(private autenticacionService:AutenticacionService) { }

  ngOnInit(): void {
    this.usuario = this.autenticacionService.currentUserValue;
  }

  editUsuario(usuario:Usuario): void {

  }

  verFoodtrucks(): void{

  }

}
