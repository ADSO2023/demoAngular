import { Pipe, type PipeTransform } from '@angular/core';
import { Employee } from '../interfaces/employee.interface';

@Pipe({
  name: 'ImgPipe',
  standalone: false,
})
export class ImgPipe implements PipeTransform {
  transform(emp: Employee): string {
    if (!emp.idEmpleado && !emp.imagenUrl) {
      return 'assets/default.png';
    }
    if (emp.imagenUrl) return emp.imagenUrl;
    return `${emp.imagenUrl}`;
  }
}
