import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { AutenticacionService } from '../../servicios/autenticacion.service'
import { Usuario } from '../../modelos/usuario';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  usuario: Usuario = {
    userId: 0,
    nombre: '',
    apellido:'',
    email: '',
    password: '',
    rol:''
  }

  uTipo = ['Foodtrucker', 'Organizador'];
  edit = false;
  submitted = false;

  constructor(private autenticacionService: AutenticacionService,
    private usuarioService:UsuarioService,
    private router:Router,
    private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    const rol = this.autenticacionService.currentUserValue.rol;
    if (params.id){
      this.usuarioService.getUsuarioById(params.id,rol)
      .subscribe(
        res => {
          console.log(res);
          this.usuario = res;
          this.usuario.rol = rol;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }

  saveUsuario() {
    this.submitted = true;
    this.usuarioService.createUsuario(this.usuario)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/login']);
      },
      err => console.error(err)
    );
  }

  updateUsuario() {
    this.usuarioService.updateUsuario(this.autenticacionService.currentUserValue.userId!,this.usuario)
    .subscribe(
      res => {
        this.router.navigate(['/users/perfil'])
      },
      err => console.error(err)
    )
  }

  compararSeleccion(s1:any,s2:any ) {
    return s1 && s2 ? s1 === s2 : s1 === s2;
  }

}
