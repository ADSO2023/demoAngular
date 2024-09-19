import { Component, OnInit } from '@angular/core';
import { DepartamentService } from '../../services/departament.service';
import { Department } from '../../interfaces/departament.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeesService } from './../../services/employee.service';
import { Employee } from '../../interfaces/employee.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import Swal from 'sweetalert2';
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
    // Verifica si el formulario es inválido
    if (this.formEmployee.invalid) return;

    // Existe el ID de empleado
    if (this.currentEmployee.idEmpleado) {
      this.employeesService.updateEmployee(this.currentEmployee).subscribe(
        (emp) => {
          // Mostrar el mensaje de actualización del empleado
          Swal.fire({
            title: 'Actualización',
            text: 'El empleado ha sido actualizado.',
            icon: 'success',
            confirmButtonText: 'Aceptar', // Cambiar "OK" por "Aceptar"
          });

          // Redireccionar después de la actualización
          this.router.navigate(['/']);
        },
        (error) => {
          // Manejar errores si ocurren
          console.error('Error al actualizar el empleado:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error al actualizar',
            text: 'Ocurrió un problema al actualizar el empleado.',
            showConfirmButton: true,
          });
        }
      );
      return;
    }

    // No existe el empleado, crear uno nuevo
    this.employeesService.createEmpleado(this.currentEmployee).subscribe(
      (emp) => {
        // Mostrar el mensaje de registro exitoso
        Swal.fire({
          title: 'Registro',
          text: 'Registro exitoso',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });

        // Redireccionar después del registro
        this.router.navigate(['/']);
      },
      (error) => {
        // Manejar errores si ocurren
        console.error('Error al crear el empleado:', error);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Error al registrar',
          text: 'Ocurrió un problema al registrar el empleado.',
          showConfirmButton: true,
        });
      }
    );

    /*
    console.log({
      formIsValid: this.formEmployee.valid,
      value: this.formEmployee.value,
    });
    */
  }

  onDelete(): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esta acción!',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        this.employeesService.deleteEmpleado(this.currentEmployee.idEmpleado).subscribe(
          () => {
            Swal.fire({
              title: '¡Eliminado!',
              text: `El empleado ${this.currentEmployee.nombreEmpleado} ha sido eliminado.`,
              icon: 'success',
              confirmButtonText: 'Aceptar',
            });
            this.router.navigate(['/']);
          },
          (error) => {
            console.error('Error al eliminar el empleado:', error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Ocurrió un problema al eliminar el empleado.',
              confirmButtonText: 'Aceptar',
            });
          }
        );
      } else if (result.isDismissed) {
        Swal.fire({
          title: 'Cancelado',
          text: 'La acción de eliminación fue cancelada.',
          icon: 'info',
          confirmButtonText: 'Aceptar',
        });
      }
    });
  }

}
