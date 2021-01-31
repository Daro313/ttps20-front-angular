import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AutenticacionService } from '../../servicios/autenticacion.service';
import { Usuario } from '../../modelos/usuario';
import { UsuarioService } from '../../servicios/usuario.service';



@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {
  usuario: Usuario;

  //constructor(private usuarioService:UsuarioService, private router:Router) { }
  constructor(private autenticacionService:AutenticacionService, private usuarioService:UsuarioService, private router:Router) { }

  ngOnInit(): void {
    //this.usuario = this.autenticacionService.currentUserValue;
  }

  guardar() {
  /*    this.usuarioService.updateUsuario(this.usuario)
      .subscribe(
        res=>this.router.navigate(['/users/perfil'])
      );*/
  }

}
