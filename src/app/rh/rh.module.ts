import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RhRoutingModule } from './rh-routing.module';
import { MaterialModule } from '../material/material.module';

import { EmployeeComponent } from './pages/employee/employee.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ListEmployeesComponent } from './pages/list-employees/list-employees.component';
import { NewEmployeeComponent } from './pages/new-employee/new-employee.component';
import { SearchEmployeeComponent } from './pages/search-employee/search-employee.component';
import { CardEmployeeComponent } from './components/card-employee/card-employee.component';
import { ImgPipe } from './pipes/imgPipe.pipe';


@NgModule({
  declarations: [
    EmployeeComponent,
    LayoutComponent,
    ListEmployeesComponent,
    NewEmployeeComponent,
    SearchEmployeeComponent,
    CardEmployeeComponent,
    ImgPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RhRoutingModule,
    MaterialModule,
  ]
})
export class RhModule {}
