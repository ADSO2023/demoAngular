import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, pipe } from 'rxjs';
import { Employee } from '../interfaces/employee.interface';
import { environments } from '../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  private apiUrl: string = environments.baseURL; // La URL API

  constructor(private http: HttpClient) {}

  getEmpleados(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}empleados`);
  }

  getEmpleadosXId(id: number): Observable<Employee | undefined> {
    return this.http
      .get<Employee>(`${this.apiUrl}empleados/${id}`)
      .pipe(catchError((error) => of(undefined)));
  }

  getSugerencias(query: String): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}empleados/autocompletar?query=${query}&_limit=3`);
  }

  createEmpleado(empleado: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl + 'empleados', empleado);
  }

  updateEmployee( empleado: Employee ): Observable<Employee> {
    if ( !empleado.idEmpleado ) throw Error('IdEmpleado is required');

    return this.http.patch<Employee>(`${ this.apiUrl }empleados/${ empleado.idEmpleado }`, empleado );
  }
  updateEmpleado(id: number, empleado: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrl}empleados/${id}`, empleado);
  }
  deleteEmpleado(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}empleados/${id}`);
  }

}
