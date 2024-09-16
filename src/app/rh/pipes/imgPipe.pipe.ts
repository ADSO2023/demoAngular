import { Pipe, type PipeTransform } from '@angular/core';
import { Employee } from '../interfaces/employee.interface';

@Pipe({
  name: 'ImgPipe',
  standalone: false,
})
export class ImgPipe implements PipeTransform {
  transform(emp: Employee): string {
    if (!emp.idEmpleado && !emp.imgAlternative) {
      return '/assets/default.png';
    }

    if (emp.imgAlternative) {return emp.imgAlternative};

    return emp.imagenUrl;
  }
}
