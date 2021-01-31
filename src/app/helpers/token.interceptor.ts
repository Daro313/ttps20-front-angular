import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AutenticacionService } from '../servicios/autenticacion.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private autenticacionService: AutenticacionService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // agrego Authorization Header con jwt token si esta disponible
        let currentUser = this.autenticacionService.currentUserValue;
        console.log('dentro del interceptor')
        //console.log(currentUser.token);
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request);
    }
}
