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
    this.usuarioService.getUsuarioById(this.autenticacionService.currentUserValue.userId!, this.autenticacionService.currentUserValue.rol)
      .subscribe(data => this.usuario = data );
  }

  logout() {
    this.autenticacionService.logout();
    this.router.navigate(['/login']);
  }

  showFoodtrucks(): void{
    this.router.navigate(['foodtrucks'], {relativeTo: this.route});
  }

}
