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
import { DemoComponent } from './pages/demo/demo.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    EmployeeComponent,
    LayoutComponent,
    ListEmployeesComponent,
    NewEmployeeComponent,
    SearchEmployeeComponent,
    CardEmployeeComponent,
    ImgPipe,
    DemoComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RhRoutingModule,
    MaterialModule,
    ToastModule
  ],
  providers: [MessageService]
})
export class RhModule {}
