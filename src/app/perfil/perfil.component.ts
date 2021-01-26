import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario;

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.usuario = this.usuarioService.getUsuarioActual();
  }

  editUsuario(usuario:Usuario): void {
    
  }

}
