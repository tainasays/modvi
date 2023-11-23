// auth.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export enum UserRole {
  Admin = 'admin',
  User = 'user',
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;
  private userRole: UserRole | null = null;

  login(username: string, password: string): Observable<boolean> {
    // Lógica de autenticação básica - verifica se há valores não nulos
    if (username && password) {
      // Simulação de lógica de atribuição de função ao usuário
      this.userRole = username === 'admin' ? UserRole.Admin : UserRole.User;

      this.isLoggedIn = true;
      return of(true);
    } else {
      this.isLoggedIn = false;
      this.userRole = null;
      return of(false);
    }
  }

  isLoggedInUser(): boolean {
    return this.isLoggedIn;
  }

  canEdit(): boolean {
    // Verifica se o usuário tem a função de administrador
    return this.userRole === UserRole.Admin;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.userRole = null;
  }

  isAdmin(): boolean {
    // Lógica para verificar se o usuário é um administrador
    // Por exemplo, você pode ter uma propriedade no serviço que indica se o usuário é um administrador
    return this.userRole === UserRole.Admin;
  }
}