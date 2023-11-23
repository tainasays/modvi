// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service'; // ajuste o caminho conforme necessário

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.canEdit()) {
      return true;
    } else {
      // Redireciona para uma página de acesso não autorizado ou realiza outra ação
      this.router.navigate(['/acesso-negado']);
      return false;
    }
  }

 
}