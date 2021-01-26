import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { UsuarioService } from '../servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {
  usuario: Usuario;

  constructor(private usuarioService:UsuarioService, private router:Router) { }

  ngOnInit(): void {
    this.usuario = this.usuarioService.getUsuarioActual();
  }

  guardar() {
      this.usuarioService.updateUsuario(this.usuario)
      .subscribe(
        res=>this.router.navigate(['/users/perfil'])
      );
  }

}
