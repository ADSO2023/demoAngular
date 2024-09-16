import { Component, OnInit } from '@angular/core';
import { Employee } from './../../interfaces/employee.interface';
import { EmployeesService } from '../../services/employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.scss'
})
export class ListEmployeesComponent implements OnInit {

public employees : Employee[] = [];

constructor(private employeeService: EmployeesService){}

ngOnInit(): void {
    this.employeeService.getEmpleados()
    .subscribe(rta => this.employees = rta);
}

}
