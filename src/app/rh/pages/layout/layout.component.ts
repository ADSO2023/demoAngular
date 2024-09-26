import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  public sidebarItems = [
    {
      label: 'Listar',
      icon: 'label',
      url: './list',
    },
    {
      label: 'Crear',
      icon: 'add',
      url: './create',
    },
    { label: 'Buscar', icon: 'search', url: './search' },
  ];

  constructor(private auth: AuthService, private router: Router) {}

  get user(): User | undefined {
    return this.auth.currentUser;
  }

  onLogout() {
    this.auth.Logout();
    this.router.navigate(['/auth/login']);
  }
}
