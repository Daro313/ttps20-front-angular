import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AutenticacionService } from '@/servicios';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private autenticacionService: AutenticacionService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentUser = this.autenticacionService.currentUserValue;
    if (currentUser && currentUser.token) {
      request = request.clone({ setHeaders: { Authorization: `Bearer ${currentUser.token}`}});
    }
    return next.handle(request);
  }
}
