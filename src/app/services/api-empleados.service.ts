import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Departamento {
  idDepartamento: number;
  nombreDepartamento: string;
}

interface Empleado {
  idEmpleado: number;
  nombreEmpleado: string;
  departamento: Departamento;
  sueldoEmpleado: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiEmpleadosService {

  private apiUrl = 'http://localhost:8080/rh-sena/'; // La URL API

  constructor(private http: HttpClient) {}

  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.apiUrl + "empleados");
  }

  getDepartamentos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'departamentos');
  }

  createEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(this.apiUrl + 'empleados', empleado);
  }

  updateEmpleado(id: number, empleado: Empleado): Observable<Empleado> {
    return this.http.put<Empleado>(`${this.apiUrl}empleados/${id}`, empleado);
  }

  deleteEmpleado(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}empleados/${id}`);
  }
}
