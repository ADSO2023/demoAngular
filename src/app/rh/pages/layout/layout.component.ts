import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {

  public sidebarItems = [
    {
      label: 'listado',
      icon: 'label',
      url: './list',
    },
    {
      label: 'crear',
      icon: 'add',
      url: './create',
    }
  ];

  constructor() {
    console.log(this.sidebarItems);
    ;
  }
}
