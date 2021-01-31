import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[];

  constructor(private usuarioService:UsuarioService) {
    this.usuarios = [];
  }

  ngOnInit(): void {
    //this.getUsuarios();
  }
/*
  getUsuarios(): void{
    this.usuarioService.getUsuarios()
    .subscribe(usuarios => this.usuarios = usuarios);
  }*/
}
