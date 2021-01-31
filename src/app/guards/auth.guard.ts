import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AutenticacionService } from '../servicios/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private autenticacionService: AutenticacionService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.autenticacionService.currentUserValue;
    console.log('usuario:');
    if (currentUser) {
        // si esta logeado lo dejo activar la ruta
        console.log('dentro del guard con usuario logeado');
        return true;
    }
    console.log('dentro del guard con el usuario no logeado');
    // No esta logeado, entonces redirecciono a la pagina de login
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

}
