import { Component, OnInit } from '@angular/core';
import { DepartamentService } from '../../services/departament.service';
import { Department } from '../../interfaces/departament.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeesService } from './../../services/employee.service';
import { Employee } from '../../interfaces/employee.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import Swal from 'sweetalert2';
import { MessageService } from 'primeng/api';
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
    private router: Router,
    private messageService: MessageService
  ) {}

  get currentEmployee(): Employee {
    const employee = this.formEmployee.value as Employee;
    return employee;
  }

  ngOnInit(): void {
    this.departamentService
      .getDepartamentos()
      .subscribe((rta) => (this.departaments = rta));

    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.employeesService.getEmpleadosXId(id)))
      .subscribe((rta) => {
        if (!rta) return this.router.navigate(['/']);
        this.formEmployee.reset(rta);
        return;
      });
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



  onSubmit(): void {
    if (this.formEmployee.invalid) return;

    // Actualizar empleado
    if (this.currentEmployee.idEmpleado) {
      this.employeesService.updateEmployee(this.currentEmployee).subscribe(
        (emp) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Actualización',
            detail: 'El empleado ha sido actualizado correctamente.',
          });
          // Delay antes de navegar
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 2000); // 2 segundos de delay
        },
        (error) => {
          console.error('Error al actualizar el empleado:', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Ocurrió un problema al actualizar el empleado.',
          });
        }
      );
      return;
    }

    // Crear nuevo empleado
    this.employeesService.createEmpleado(this.currentEmployee).subscribe(
      (emp) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Registro',
          detail: 'El empleado ha sido registrado exitosamente.',
        });
        // Delay antes de navegar
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000); // 2 segundos de delay
      },
      (error) => {
        console.error('Error al crear el empleado:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Ocurrió un problema al registrar el empleado.',
        });
      }
    );
  }


  onDelete(): void {
    this.employeesService
      .deleteEmpleado(this.currentEmployee.idEmpleado)
      .subscribe(
        () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Eliminado',
            detail: `El empleado ${this.currentEmployee.nombreEmpleado} ha sido eliminado.`,
          });
          // Delay antes de navegar
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 2000); // 2 segundos de delay
        },
        (error) => {
          console.error('Error al eliminar el empleado:', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Ocurrió un problema al eliminar el empleado.',
          });
        }
      );
  }

}
