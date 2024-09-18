import { Component, OnInit } from '@angular/core';
import { DepartamentService } from '../../services/departament.service';
import { Department } from '../../interfaces/departament.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeesService } from './../../services/employee.service';
import { Employee } from '../../interfaces/employee.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.scss',
})
export class NewEmployeeComponent implements OnInit {
  public departaments: Department[] = [];
  constructor(
    private departamentService: DepartamentService,
    private employeesService: EmployeesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  get currentEmployee(): Employee {
    const employee = this.formEmployee.value as Employee;
    return employee;
  }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;


    this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.employeesService.getEmpleadosXId(id)),
      ).subscribe((rta) => {
        if (!rta) return this.router.navigate(['/']);
        this.formEmployee.reset(rta);
        return;
      });

    this.departamentService
      .getDepartamentos()
      .subscribe((rta) => (this.departaments = rta));
  }

  public formEmployee = new FormGroup({
    idEmpleado: new FormControl<number | null>(null),
    nombreEmpleado: new FormControl<string>(''),
    sueldoEmpleado: new FormControl<number>(10000),
    imagenUrl: new FormControl<string>(''),
    descripcion: new FormControl<string>(''),
    habilidades: new FormControl<string>(''),
    estado: new FormControl<string>('A'),
    departamento: new FormGroup({
      idDepartamento: new FormControl<number | null>(null),
      nombreDepartamento: new FormControl<string>(''),
    }),
  });

  onSumit(): void {
    if (this.formEmployee.invalid) return;
    //Existe el ID de empleado
    if (this.currentEmployee.idEmpleado) {

      this.employeesService
        .updateEmployee(this.currentEmployee)
        .subscribe((emp) => {
          //TODO: Mostar el mensaje de actualizacion  del empleado
        });
      return;
    }

    //No existe el empleado

    this.employeesService
      .createEmpleado(this.currentEmployee)
      .subscribe((emp) => {
        //TODO: Mostar el mensaje de regitro correctamente el empleado redireccionar /
        console.log(emp);
      });

    /*
    console.log({
      fomrIsValid: this.formEmployee.valid,
      value: this.formEmployee.value,

      */
  }
}
