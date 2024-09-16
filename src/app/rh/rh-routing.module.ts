import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { NewEmployeeComponent } from './pages/new-employee/new-employee.component';
import { SearchEmployeeComponent } from './pages/search-employee/search-employee.component';
import { ListEmployeesComponent } from './pages/list-employees/list-employees.component';
import { EmployeeComponent } from './pages/employee/employee.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'new-employee', component: NewEmployeeComponent },
      { path: 'search', component: SearchEmployeeComponent },
      { path: 'edit/:id', component: EmployeeComponent },
      { path: 'list', component: ListEmployeesComponent },
      { path: ':id', component: EmployeeComponent },
      { path: '**', redirectTo: 'list' },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RhRoutingModule { }
