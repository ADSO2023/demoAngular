import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Employee } from '../../interfaces/employee.interface';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
})
export class EmployeeComponent implements OnInit {
  employee?: Employee;
  constructor(
    private employeesService: EmployeesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      delay(1000),
      switchMap(({id}) => this.employeesService.getEmpleadosXId(id)),
    ).subscribe(rta => {
      if(!rta) return this.router.navigate(['/rh/list']);
      this.employee = rta;
      console.log(rta);
      return;
    });
  }


  goBack(){
    this.router.navigateByUrl('/rh/list');
  }
}
