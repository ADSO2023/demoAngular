import { Injectable } from '@angular/core';
import { CanActivate, CanMatch, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanMatch, CanActivate {
  constructor() { }

  canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
    console.log("canMatch");

    console.log({ route, segments });
    // Implementación de la lógica si deseas que esta parte se ejecute
    // throw new Error('Method not supported'); // Comenta o quita esto si no quieres el error.
    return true; // Retorna true si deseas que pase la guardia
  }

  canActivate(route: import('@angular/router').ActivatedRouteSnapshot, state: import('@angular/router').RouterStateSnapshot): Observable<boolean | import('@angular/router').UrlTree> | Promise<boolean | import('@angular/router').UrlTree> | boolean {
    console.log("canActivate");
    console.log({ route, state });
    // Implementación de la lógica si deseas que esta parte se ejecute
    // throw new Error('Method not supported'); // Comenta o quita esto si no quieres el error.
    return true; // Retorna true si deseas que pase la guardia
  }
}
