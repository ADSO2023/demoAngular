import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RhRoutingModule } from './rh-routing.module';
import { LayoutComponent } from './pages/layout/layout.component';
import { ListEmployeesComponent } from './pages/list-employees/list-employees.component';
import { NewEmployeeComponent } from './pages/new-employee/new-employee.component';
import { SearchEmployeeComponent } from './pages/search-employee/search-employee.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    LayoutComponent,
    ListEmployeesComponent,
    NewEmployeeComponent,
    SearchEmployeeComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    RhRoutingModule,
    MaterialModule
  ]
})
export class RhModule { }
