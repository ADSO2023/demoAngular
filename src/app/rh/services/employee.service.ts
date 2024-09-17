import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, pipe } from 'rxjs';
import { Department, Employee } from '../interfaces/employee.interface';
import { environments } from '../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  private apiUrl: string = environments.baseURL; // La URL API

  constructor(private http: HttpClient) {}

  getEmpleados(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/empleados`);
  }

  getEmpleadosXId(id: number): Observable<Employee | undefined> {
    return this.http
      .get<Employee>(`${this.apiUrl}/empleados/${id}`)
      .pipe(catchError((error) => of(undefined)));
  }

  getSugerencias(query: String): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/empleados/autocompletar?query=${query}&_limit=3`);
  }

  createEmpleado(empleado: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl + 'empleados', empleado);
  }
  updateEmpleado(id: number, empleado: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrl}empleados/${id}`, empleado);
  }
  deleteEmpleado(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}empleados/${id}`);
  }
  getDepartamentos(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl + 'departamentos');
  }
}
