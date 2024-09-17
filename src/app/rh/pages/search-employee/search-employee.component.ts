import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Employee } from './../../interfaces/employee.interface';
import { EmployeesService } from './../../services/employee.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrl: './search-employee.component.scss',
})
export class SearchEmployeeComponent {
  myControl = new FormControl('');
  public employees: Employee[] = [];
  public selectedEmployee?: Employee;
  constructor(private http: EmployeesService) {}

  SearchEmployee() {
    const value: string = this.myControl.value || '';
    this.http.getSugerencias(value).subscribe(
      (employees) => {
        this.employees = employees;
      },
      (error) => console.error('Error:', error)
    );
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void {

    if ( !event.option.value ) {
      this.selectedEmployee = undefined;
      return;
    }
    const employee: Employee = event.option.value;
    this.myControl.setValue( employee.nombreEmpleado );
    this.selectedEmployee = employee;
    console.log(employee);

  }

}
