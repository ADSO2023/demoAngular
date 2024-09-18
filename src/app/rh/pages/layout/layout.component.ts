import { Component } from '@angular/core';

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

  constructor() {}
}
