import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { AutenticacionService } from '../../servicios/autenticacion.service';
import { Usuario } from '../../modelos/usuario';
import { UsuarioService } from '../../servicios/usuario.service';

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

  constructor(
    private autenticacionService:AutenticacionService,
    private usuarioService:UsuarioService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getUsuarioById();
  }

  getUsuarioById() {
    const id = this.autenticacionService.currentUserValue.userId;
    const rol = this.autenticacionService.currentUserValue.rol;
    this.usuarioService.getUsuarioById(id!,rol)
      .subscribe(
        data => {
          this.usuario = data;
          this.usuario.rol=rol;
      });
  }

  logout() {
    this.autenticacionService.logout();
    this.router.navigate(['/login']);
  }

  showFoodtrucks() {
    this.router.navigate(['foodtrucks'], {relativeTo: this.route});
  }

  newFoodtruck() {
    this.router.navigate(['foodtrucks/new'], {relativeTo: this.route});
  }

  showEvents() {

  }

  newEvent() {

  }

  delete(u:Usuario) {
    this.usuarioService.deleteUser(u)
    .subscribe(alert('Cuenta eliminada con exito :('));
  }

}
