import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../interfaces/employee.interface';

@Component({
  selector: 'card-employee',
  templateUrl: './card-employee.component.html',
  styleUrl: './card-employee.component.scss',
})
export class CardEmployeeComponent implements OnInit {
  @Input()
  public emp!: Employee;
  ngOnInit(): void {
    if (!this.emp) throw Error('Employee required');

  }

  

}
